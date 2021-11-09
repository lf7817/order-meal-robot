import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoodsConfgType } from 'src/config/goods.config';
import { WebhooksResponse } from './order-meal.interface';

@Injectable()
export class OrderMealService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async pushOrderMealMessage() {
    const list = await this.queryGoods();
    const config = this.configService.get('goods');
    const webhooks = this.configService
      .get('webhooks')
      .filter((item) => !!item);

    if (!list || list.length === 0) {
      return '菜单为空';
    }

    const spu = list[0];
    const skuList = spu.skuList;

    const data = {
      msgtype: 'template_card',
      template_card: {
        card_type: 'news_notice',
        source: {
          icon_url:
            'https://pic.qianmi.com/qmui/v0.2/img/store-logo-default.png',
          desc: '千米晚餐',
        },
        main_title: {
          title: '点餐啦！点餐啦！',
          desc: '天大地大吃饭最大！',
        },
        card_image: {
          url: spu.img,
          aspect_ratio: 2.25,
        },
        vertical_content_list: [
          {
            title: '今日美食',
            desc: '',
          },
        ],
        horizontal_content_list: skuList.map((item, index) => ({
          keyname: `套餐${index + 1}`,
          value: item.skuName,
        })),
        jump_list: [
          {
            type: 2,
            appid: 'wx3f84ddd76ba9897a',
            pagepath: 'pages/shop/index?shopId=' + config.data.shopId,
            title: '千米晚餐',
          },
        ],
        card_action: {
          type: 2,
          appid: 'wx3f84ddd76ba9897a',
          pagepath: 'pages/shop/index?shopId=' + config.data.shopId,
        },
      },
    };

    console.log(list);

    try {
      await Promise.all(webhooks.map((url) => this.push(url, data)));
      return true;
    } catch (e) {
      return false;
    }
  }

  async push(url: string, data: any): Promise<WebhooksResponse> {
    return new Promise<any>((resolve, reject) => {
      this.httpService
        .post(url, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .subscribe((res) => {
          console.log(res);
          if (res.data.errcode === 0) {
            resolve(res.data);
          } else {
            reject(res.data);
          }
        });
    });
  }

  /**
   * 查询菜单
   */
  async queryGoods(): Promise<any[]> {
    const config = this.configService.get<GoodsConfgType>('goods');

    return await new Promise((resolve, reject) => {
      this.httpService
        .post(config.url, config.data, {
          headers: {
            'Content-Type': 'application/json',
            'x-client-type': 'wa',
            adminId: config.adminId,
          },
        })
        .subscribe((res) => {
          if (res && res.status === HttpStatus.OK && res.data?.ok === true) {
            resolve(res.data.data.dataList || []);
          } else {
            reject('请求失败');
          }
        });
    });
  }
}

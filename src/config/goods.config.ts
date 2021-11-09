import { registerAs } from '@nestjs/config';

export type GoodsConfgType = {
  url: string;
  adminId: string;
  data: Record<string, any>;
};

export const GoodsConfig = registerAs(
  'goods',
  (): GoodsConfgType => ({
    url: process.env.GOODS_REQUEST_URL,
    adminId: process.env.GOODS_ADMIN_ID,
    data: {
      catId: Number(process.env.GOODS_CAT_ID),
      q: '',
      sort: '',
      direction: 'DESC',
      hasStock: true,
      searchStore: false,
      scene: 'spu',
      shopId: process.env.GOODS_SHOP_ID,
      chainType: 'join',
      isIncludeSku: true,
      pageNum: 0,
      pageSize: 10,
      levelId: Number(process.env.GOODS_LEVEL_ID),
      longitude: '',
      latitude: '',
    },
  }),
);

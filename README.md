# 定时点餐

## 部署

本项目托管在[vercel](https://www.cnblogs.com/wang-bo/p/15472423.html), 使用了`Github Actions`实现了自动部署，push 代码即可自动部署

## 定时任务

`nest`本身是支持定时任务的，但是`vercel`不支持定时任务，官网提供了[Github Actions](https://vercel.com/docs/concepts/solutions/cron-jobs)解决方案，但是`Github Actions`延时太严重了，没法用。最后采用[腾讯云函数](https://zhuanlan.zhihu.com/p/379365305)方案

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yikaobang.yixue',
  name: '医考帮',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.psychiatrygarden.activity.HomePageNewActivity',
          matches: 'ImageView[vid="close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13425853', // 无vid旧快照
            'https://i.gkd.li/i/28434183',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告',
      desc: '顶部轮播图广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.psychiatrygarden.activity.HomePageNewActivity',
          matches: '[vid="iv_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/28434131',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-悬浮窗广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.psychiatrygarden.activity.HomePageNewActivity',
          matches: 'ImageSwitcher - [vid="iv_delete"]',
          snapshotUrls: 'https://i.gkd.li/i/28434131',
        },
      ],
    },
  ],
});

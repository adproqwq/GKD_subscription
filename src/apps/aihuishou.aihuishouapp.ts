import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'aihuishou.aihuishouapp',
  name: '爱回收',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          //   activityIds: null,
          matches: 'ImageView + [vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/28374178',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.recycle.activity.RecycleIndexActivity',
          matches:
            '@View[width<162 && height<162] <2 View <2 [childCount=2] < ComposeView < * < ViewGroup < [childCount=6] < * < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/28466056',
        },
      ],
    },
  ],
});

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
  ],
});

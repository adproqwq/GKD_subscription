import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.quora.android',
  name: 'Quora',
  groups: [
    {
      key: 1,
      name: '分段广告-信息流广告',
      desc: '赞助推广',
      fastQuery: true,
      activityIds: '.components.activities.QuoraActivity',
      rules: [
        {
          key: 0,
          matches:
            '[text="Sponsored"] < View <3 [childCount=3] <2 [childCount>5] >6 @Button[desc="Hide"] <<(10-n) View[visibleToUser=true][childCount=1] <n [id="root"] <<(7-n) [vid="swiperefresh"]',
          snapshotUrls: [
            'https://i.gkd.li/i/28922252',
            'https://i.gkd.li/i/28922253',
          ],
          exampleUrls: 'https://e.gkd.li/8764eb22-4910-4602-a3de-973fcd9d8e53',
        },
        {
          key: 20,
          preKeys: [0],
          matches:
            '@Button[desc="Dismiss"] < View < View < View < View < View < View <2 View < WebView < WebView < [vid="swiperefresh"]',
          snapshotUrls: 'https://i.gkd.li/i/28922254',
        },
      ],
    },
  ],
});

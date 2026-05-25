import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lxf.snzlcgtzxyx',
  name: '橘汁',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.hive.MainTabActivity',
          matches:
            '@[clickable=true][desc="top_close_button"] <<2 [childCount=2] <n [childCount=2] < ViewGroup +n [childCount=2] > [text="广告"][index=parent.childCount.minus(1)]',
          snapshotUrls: 'https://i.gkd.li/i/28220375',
          exampleUrls: 'https://e.gkd.li/3072484b-b841-4b04-b07c-9c125b153d4e',
        },
      ],
    },
  ],
});

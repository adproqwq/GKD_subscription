import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jk.fitness',
  name: '食卡卡',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        },
        {
          key: 1,
          //   activityIds: '.MainActivity',
          matches:
            '@ImageView < [width<137 && height<137] < [visibleToUser=true] +2 ViewGroup >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/28437892',
        },
      ],
    },
  ],
});

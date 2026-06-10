import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.One.WoodenLetter',
  name: '一个木函',
  groups: [
    {
      key: 1,
      name: '局部广告',
      desc: 'x掉',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            'ImageView[width>540] + View -> ImageView[width<71] - View[text=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/25547842',
        },
      ],
    },
    {
      key: 2,
      name: '评价提示',
      desc: '点击[残忍拒绝]',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.One.WoodenLetter.MainActivity',
          matches: '[childCount=2] > Button[text="残忍拒绝"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/28805036',
        },
      ],
    },
  ],
});

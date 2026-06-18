import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 1,
      name: '功能类-自动[上滑]继续看短剧',
      desc: '读秒结束后[上滑]广告页面跳过广告',
      rules: [
        {
          fastQuery: true,
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.7',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200, //滑动时长
          },
          activityIds:
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
          matches: '[text="上滑继续观看短剧"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/29092674',
          excludeSnapshotUrls: 'https://i.gkd.li/i/29092652', //倒计时未结束
          exampleUrls: 'https://e.gkd.li/36e57d51-d134-4507-9aca-ada9e71b9b14',
        },
      ],
    },
  ],
});

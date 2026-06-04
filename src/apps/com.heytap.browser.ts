import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.browser',
  name: '一加浏览器',
  groups: [
    {
      key: 1,
      name: '局部广告-信息流',
      fastQuery: true,
      activityIds: '.webdetails.third.light.WeatherDetailsActivity',
      rules: [
        {
          key: 0,
          name: '生活建议',
          matches:
            '@Button[clickable=true][width<97 && height<94][visibleToUser=true] < View <n View <<4 [index=parent.childCount.minus(1)] <n FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/28591184',
          exampleUrls: 'https://e.gkd.li/6c6c1178-dad4-4eba-aeb7-f781f4b10752',
        },
      ],
    },
  ],
});

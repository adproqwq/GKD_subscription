import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqsports',
  name: '腾讯体育',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          matches: 'TextView[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/14032883',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-首页',
      desc: '进入app-首页后出现,限时18s',
      matchTime: 18000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds: '.ui.SplashActivity',
          matches:
            '@ImageView[childCount=0] - * > [vid="webViewRL"] -> [text="图片"] <<4 [vid="webViewRL"]',
          snapshotUrls: 'https://i.gkd.li/i/27564093',
          exampleUrls: 'https://e.gkd.li/42b7abd7-6480-44af-897c-b397f6c01fd2',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.telegram.messenger.web',
  name: 'Telegram',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="更新 Telegram"]',
            '@View[clickable=true] + [text="请稍后提醒我"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13847837',
        },
      ],
    },
    {
      key: 2,
      name: '其他-添加生日提示',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'org.telegram.ui.LaunchActivity',
          matches:
            '@ImageView[clickable=true] - * >2 [text^="添加您的生日" || text^="Add your birthday"]',
          snapshotUrls: 'https://i.gkd.li/i/26601844', // 英文
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通讯录权限',
      desc: '点击稍后',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'org.telegram.ui.LaunchActivity',
          matches:
            '@[text="Not now" || text^="稍后"] < [childCount=2] - ScrollView >2 [text*="contacts" || text*="联系人"][text.length>20]',
          snapshotUrls: 'https://i.gkd.li/i/28680747',
        },
      ],
    },
  ],
});

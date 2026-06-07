import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.email',
  name: '(小米)电子邮件',
  groups: [
    {
      // 小米自带电子邮件
      key: 1,
      name: '权限提示-自启动',
      desc: '点击[取消]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.wps.multiwindow.main.HomeActivity',
          matches: [
            '[text*="自启动权限未开启"]',
            '[text="取消"][clickable=true]',
          ],
          exampleUrls: 'https://e.gkd.li/1eacdaf8-1405-44d8-a9b9-228e913c5180',
          snapshotUrls: 'https://i.gkd.li/i/17276404',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动切换到[合并账户]',
      desc: '仅在收件箱界面开屏时触发',
      fastQuery: true,
      activityIds: 'com.wps.multiwindow.main.HomeActivity',
      rules: [
        {
          key: 0,
          matchTime: 5000,
          actionMaximum: 1,
          resetMatch: 'app',
          matches:
            '[!(text="合并账户" || text="合并帐户")] <2 [vid="titleContainer"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/25607057',
          excludeSnapshotUrls: 'https://i.gkd.li/i/28678424',
        },
        {
          key: 1,
          preKeys: 0,
          actionDelay: 200, // 目标节点不是 clickable 的，等动画放完再点
          matches: '[text="合并账户" || text="合并帐户"][checkable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/25607113',
            'https://i.gkd.li/i/28678374',
          ],
        },
      ],
    },
  ],
});

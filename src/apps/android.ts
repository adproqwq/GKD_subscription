import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'android',
  name: 'Android 系统',
  groups: [
    {
      key: 1,
      name: '功能类-app无响应-关闭',
      desc: '点击关闭',
      rules: [
        {
          // activityIds: [],
          fastQuery: true,
          matches: [
            '[text$="没有响应" || text*="无响应"]',
            '[vid="aerr_close"][text="确定" || text="关闭应用"][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24468450',
            'https://i.gkd.li/i/24992555',
          ],
          exampleUrls: 'https://e.gkd.li/c87754c4-6fe1-4567-97c3-c74c8db3d561',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-VIVO-继续使用VPN',
      desc: 'VPN似乎不可用?-继续使用',
      rules: [
        {
          fastQuery: true,
          matches:
            '[text*="应用无法使用网络"] <<2 [vid="topPanel"] +2 [vid="buttonPanel"] >2 [text="继续使用VPN"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25832981',
          exampleUrls: 'https://e.gkd.li/3b6bb691-3e05-466f-8f37-006194b6435d',
        },
      ],
    },
  ],
});

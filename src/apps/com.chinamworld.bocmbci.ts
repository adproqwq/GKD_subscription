import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.bocmbci',
  name: '中国银行',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      matchRoot: true, // 出现Ad时未关闭，录屏or截快照才响应
      activityIds:
        'com.boc.bocsoft.mobile.bocmobile.buss.system.main.ui.MainActivity',
      rules: [
        {
          key: 0,
          matches: '@[desc="关闭"] > [vid="btn_action"]',
          snapshotUrls: 'https://i.gkd.li/i/17691747',
          exampleUrls: 'https://e.gkd.li/988dbaff-68b3-499a-8736-a6e5b3364ed9',
        },
        {
          key: 1,
          matches:
            '@Image[text=""][desc=null] <(1,2) View[childCount=2] <<(1,2) View <n [id="app"] <<4 [vid="webview_layout"]',
          snapshotUrls: [
            'https://i.gkd.li/i/19567854',
            'https://i.gkd.li/i/26644706',
            'https://i.gkd.li/i/29383961', // =!末尾子节点
          ],
          exampleUrls: [
            'https://e.gkd.li/13b6fa95-5198-41f5-b39c-d40166a624fb',
            'https://e.gkd.li/98cd7f08-a225-4fcc-8c4f-bd92e1359bda',
          ],
        },
      ],
    },
  ],
});

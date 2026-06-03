import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sinovatech.unicom.ui',
  name: '中国联通',
  groups: [
    {
      key: 1,
      name: '权限提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.sinovatech.unicom.basic.ui.activity.MainActivity',
            'com.sinovatech.unicom.basic.ui.activity.WelcomeClient',
          ],
          matches: '[text="去开启"] - [vid="custom_dialog_cancel_button"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13331268',
            'https://i.gkd.li/i/14751210',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches: '[vid="custom_dialog_cancel_button"]',
          snapshotUrls: 'https://i.gkd.li/i/13511386',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-首页弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '首页弹窗1',
          forcedTime: 10000,
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches:
            '[text="首页弹窗"] >2 View > @Image[clickable=true][text!=null] <<n [vid="main_fragment_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/14504242',
        },
        {
          key: 1,
          name: '首页弹窗2',
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches:
            'WebView[text!=null] > View[id="app"] >2 View[childCount>3] > View[childCount=1] > @TextView[childCount=0][visibleToUser=true][text=""][width<150&&height<150] <<n [vid="main_fragment_layout" || vid="main_fragment_layout_haoka"]',
          snapshotUrls: [
            'https://i.gkd.li/i/15971964',
            'https://i.gkd.li/i/18290899',
          ],
        },
        {
          key: 2,
          name: '首页弹窗3',
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches:
            '@Image[text^="close"][childCount=0][width<150 && height<150] <2 View < View <2 View < View < View <2 View < View < WebView < WebView < [vid="homeweb_rootview"]',
          snapshotUrls: 'https://i.gkd.li/i/23764750',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-首页右下角卡片悬浮窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches: '[vid="home_xuanfu_close" || vid="home_drag_view_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13930543',
            'https://i.gkd.li/i/23141106',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-剩余话费弹窗广告',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          matches:
            '@TextView[index=parent.childCount.minus(1)][width<78 && height<78] <n View[left=0 && top=0] <n View[left=0 && top=0] <<3 WebView - [vid="toutiao_webview_xinxiliu_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/28557416',
          exampleUrls: 'https://e.gkd.li/521e50a7-1756-4572-b06a-a42d9ec700c4',
        },
      ],
    },
  ],
});

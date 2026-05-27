import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiachufang',
  name: '下厨房',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[vid="skip_container"][visibleToUser=true]', // https://github.com/AIsouler/GKD_subscription/issues/749
          exampleUrls: 'https://e.gkd.li/5f3509d5-0b0b-4d79-b0e6-275a591ef2f5',
          snapshotUrls: 'https://i.gkd.li/i/18587428',
        },
        {
          key: 1,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/19724417',
        },
        {
          key: 2,
          matches:
            '@[text.length<10][text*="跳过"] + * > [text*="跳转"][text$="第三方应用"]',
          snapshotUrls: 'https://i.gkd.li/i/19724959',
          exampleUrls: 'https://e.gkd.li/5c6579f4-77bb-4970-851f-087c2f86d6ad',
        },
        {
          key: 3,
          matches:
            '@View[clickable=true][width<135 && height<135] <3 FrameLayout <2 FrameLayout < [vid="ad_container"]',
          snapshotUrls: 'https://i.gkd.li/i/27316377',
          exampleUrls: 'https://e.gkd.li/e7a1e2b1-5694-40cf-9db4-68983de45a9a',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
      fastQuery: true,
      activityIds: '.activity.recipe.RecipeDetailActivity',
      rules: [
        {
          key: 1,
          matches: '[vid="ad_close" || vid="jad_feed_close"][clickable=true]',
          snapshotUrls: [
            //无vid旧快照
            'https://i.gkd.li/i/13348710',
            'https://i.gkd.li/i/13363079',
          ],
        },
        {
          key: 3,
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13454534',
        },
        {
          key: 4,
          matches:
            '@[name$="ImageView" || clickable=true][width<68] < [childCount=1] <n * <n * >(1,2,3) [text^="立即" || text^="马上" || text*="下载" || text*="了解" || text*="查看" || text*="领取" || text$="小程序"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13484117',
            'https://i.gkd.li/i/18249193',
            'https://i.gkd.li/i/25508978',
            'https://i.gkd.li/i/28316307',
          ],
          exampleUrls: 'https://e.gkd.li/f9b63d84-3363-4330-93b9-156d6f3d3d32',
        },
        {
          key: 6,
          matches:
            'ImageView < @[clickable=true] < ViewGroup <2 [childCount=2] <(2,3) [getChild(0).name$="TextView"] <(1,2) [childCount=2] >4 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/28316136',
            'https://i.gkd.li/i/28316257',
            'https://i.gkd.li/i/28316307', // 子key4
          ],
        },
      ],
    },
    {
      key: 2,
      name: '其他-厨房问卷',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.recipe.RecipeDetailActivity',
          matches: '@[clickable=true][desc="关闭"] - [text^="厨房问卷"]',
          snapshotUrls: 'https://i.gkd.li/i/13363042',
        },
      ],
    },
  ],
});

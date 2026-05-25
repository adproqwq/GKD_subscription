import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wordscon.axe',
  name: '句子控',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[vid="imv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/28225736',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-[取消]转发给AI',
      desc: '长按句子后出现的弹窗, 点击[取消]',
      rules: [
        {
          fastQuery: true,
          activityIds: ['.sentence.AXPostDetailActivity', '.main.MainActivity'],
          matches: '@[text="取消"][clickable=true] -n [text^="转发给AI伙伴"]',
          snapshotUrls: [
            'https://i.gkd.li/i/28225915',
            'https://i.gkd.li/i/28226297',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '分段广告',
      desc: '①点击x掉 ②点击[不感兴趣] ③点击[我知道了]',
      fastQuery: true,
      activityIds: [
        '.sentence.AXPostDetailActivity',
        '.main.MainActivity',
        '.search.AXSquareSearchActivity',
        '.topic.AXDetailTopicActivity', //热门话题页
      ],
      rules: [
        {
          key: 0,
          name: '①点击[x]掉',
          matches:
            '@[clickable=true] < [desc^="dislike"] -2 [childCount=2] >2 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/28225949',
            'https://i.gkd.li/i/28226212',
            'https://i.gkd.li/i/28226355',
          ],
          exampleUrls: 'https://e.gkd.li/6a509f3c-811f-49b0-8314-8aaf7b604e5c',
        },
        {
          key: 1,
          name: '①点击x掉',
          matches:
            '@Image[width<69 && height<69][bottom<getPrev(3).top] < View[index=1] <<n [vid="layout_ad_container"] <<n [vid="layout_detail"] + [vid="bt_response"]',
          snapshotUrls: 'https://i.gkd.li/i/28226759', // 防误触右下角悬浮按键: [bottom<getPrev(3).top]
          exampleUrls: 'https://e.gkd.li/dae5c8a2-77b4-428d-8568-e9a04bd773e9',
        },
        {
          key: 2,
          name: '①x掉',
          matches:
            '@ImageView[width<71 && height<71] <4 [childCount=4] -2 FrameLayout >3 [text^="跳转至"]',
          snapshotUrls: 'https://i.gkd.li/i/28227993',
          exampleUrls: 'https://e.gkd.li/6ed41a6d-5e89-4e86-b1d9-de977ca128c0',
        },

        // 第二段
        {
          key: 20,
          preKeys: [0, 1, 2],
          name: '②点击[不感兴趣]',
          matches: '@[clickable=true] >2 [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/28225930',
            'https://i.gkd.li/i/28226757',
            'https://i.gkd.li/i/28228086',
          ],
          exampleUrls: 'https://e.gkd.li/7847c022-0eec-4d9a-8649-4ed6bde51f29',
        },

        // 第三段
        {
          key: 30,
          preKeys: [20],
          name: '③点击[我知道了]',
          matches: '[text="开通会员"] -2 [vid="tv_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/28226756',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ideal.flyerteacafes',
  name: '飞客',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          activityIds: [
            '.ui.HomeActivity',
            '.ui.activity.thread.NormalThreadActivity',
          ],
          matches:
            '@[vid="close" || vid="iv_close"] - FrameLayout > [vid="iv_adv_tip"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13466119', // 旧快照 无vid
            'https://i.gkd.li/i/27550981', // iv_close
          ],
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-信息流广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.thread.NormalThreadActivity',
          matches:
            '@TextView[visibleToUser=true] <3 View < [id=null][childCount=3] <n View[childCount>10] <6 [id="comment-list"] <n View[childCount>10] < WebView < WebView < [vid="webContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/27529035', // 帖子详情页
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.reddit.frontpage',
  name: 'Reddit',
  groups: [
    {
      key: 3,
      name: '其他-关闭订阅社区消息提示',
      desc: '自动点击[Not Now]',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.reddit.launch.main.MainActivity',
          matches:
            '[vid="sheet_container"] > [vid="cancel_button"][text="Not Now"][clickable=true]',
          exampleUrls: 'https://e.gkd.li/b640f2c9-4564-420f-8a2f-20f461032f3d',
          snapshotUrls: [
            'https://i.gkd.li/i/13649914',
            'https://i.gkd.li/i/17269009',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '其他-NSFW 内容提示',
      desc: '自动点击 continue',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.reddit.launch.main.MainActivity',
          matches: 'Button[text="Cancel"] + Button[text="Continue"]',
          snapshotUrls: 'https://i.gkd.li/i/13649992',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-自动点击翻译',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.reddit.launch.main.MainActivity',
          matches:
            '@[id="translation_banner_action"][clickable=true] > [visibleToUser=true][text="翻译"] <<n [vid="fragment_pager"]',
          exampleUrls: 'https://e.gkd.li/8fcef25c-ff16-4456-8174-cac27aa7fc66',
          snapshotUrls: 'https://i.gkd.li/i/22451437',
          excludeSnapshotUrls: 'https://i.gkd.li/i/22451467',
        },
      ],
    },
    {
      key: 6,
      name: '分段广告-卡片广告',
      desc: '①点击卡片右上角 ②点击[隐藏]',
      activityIds: 'com.reddit.launch.main.MainActivity',
      rules: [
        {
          key: 1,
          name: '①点击卡片右上角',
          matches:
            '@[id="post_overflow"] <4 [id="post_header"] <2 [id="promoted_post_unit"]',
          snapshotUrls: 'https://i.gkd.li/i/28876494',
        },
        {
          key: 2,
          name: '①坐标点击卡片右上角',
          position: {
            left: 'width * 0.9106',
            top: 'width * 0.0657',
          },
          matches:
            'View[top=prev.bottom] - @View[height<200][top=prev.top] <2 [id="conversation_screen_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/28876944',
        },

        // 第二段
        {
          key: 20,
          preKeys: [1, 2],
          name: '②点击[隐藏]',
          matches: '@[clickable=true] > Button - [text="Hide"]',
          snapshotUrls: [
            'https://i.gkd.li/i/28876631',
            'https://i.gkd.li/i/28876636',
          ],
        },
      ],
    },
  ],
});

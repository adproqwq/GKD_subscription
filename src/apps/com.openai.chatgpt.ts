import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.openai.chatgpt',
  name: 'ChatGPT',
  groups: [
    {
      key: 1,
      name: '通知提示-充值Plus提示',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.MainActivity',
          matches:
            '[desc="关闭"] < @[clickable=true][childCount=1] + * -> [text="获取 Plus" || text^="升级"][visibleToUser=true] < [index=parent.childCount.minus(1)] <n View[childCount>=3] <<(1,2) View <(5,6) View[childCount>=7] <<(6,8) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24996012', // 套餐限额_ 获取Plus
            'https://i.gkd.li/i/24996012',
            'https://i.gkd.li/i/28416563', // 更专业文件?
            'https://i.gkd.li/i/28416912', // ^升级
            'https://i.gkd.li/i/28416926',
          ],
          exampleUrls: [
            'https://e.gkd.li/7c9669de-f7b9-48da-a0d0-cb296b68692b',
            'https://e.gkd.li/db0ecc3d-9401-4c2d-bdc0-32262ce443a4',
            'https://e.gkd.li/e530ef58-fe7f-4b15-a496-67e3d9629f73',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-ban话题提前阻断屏蔽',
      desc: '再次生成-总结/结尾标志终止',
      activityIds: '.MainActivity',
      rules: [
        {
          key: 0,
          name: '长按',
          matches:
            '[text^="出于安全考虑"][visibleToUser=true] - @View[clickable=true] > TextView',
          action: 'longClickCenter', // 应用不接受无障碍事件
          snapshotUrls: 'https://i.gkd.li/i/26232942',
          exampleUrls: 'https://e.gkd.li/dfe0c486-00ef-4cdd-be32-9eb2306472f5',
        },
        {
          key: 1,
          name: '编辑',
          preKeys: [0],
          position: {
            left: 'width * 0.7972',
            top: 'width * 0.5347',
          },
          matches:
            '[text^="出于安全考虑"][visibleToUser=true] <n View[childCount=3]',
          snapshotUrls: 'https://i.gkd.li/i/26233112',
          exampleUrls: 'https://e.gkd.li/f1edecab-d7f5-4f2f-8af7-daeb5ded16f7',
        },
        {
          key: 2,
          name: '发送消息',
          preKeys: [1],
          matches:
            'EditText >3 @View[childCount=2][clickable=true] > [desc="发送消息"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26233149',
          exampleUrls: 'https://e.gkd.li/8f4ff7c8-d5a7-4d47-bc01-14b54d9b6b24',
        },
        {
          name: '1.“总结”中断',
          preKeys: [2],
          actionDelay: 1200,
          matches: [
            'View[focusable=true] > [text*="总结"]',
            'EditText >3 @View[childCount=2][clickable=true] > [desc="停止"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/26233512',
          exampleUrls: 'https://e.gkd.li/2e88e6ee-b21d-4d26-b9dc-13fa75fc883f',
        },
        {
          name: '2.“结尾标志”中断',
          preKeys: [2],
          matches: [
            'View[focusable=true] > [text="make_Done"] + [text="make_Done"]',
            'EditText >3 @View[childCount=2][clickable=true] > [desc="停止"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/26233630',
          exampleUrls: 'https://e.gkd.li/0eabe194-4f53-4f45-8aa3-a23a7898b2e0',
        },
        {
          key: 3,
          preKeys: [2],
          name: '自动滚动至底部',
          matches:
            'Button - View[desc="滚动至底部"][visibleToUser=true] < @View[childCount=2][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/26233818',
          exampleUrls: 'https://e.gkd.li/9b6643fa-6791-481c-8f9f-bb24c65678af',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告',
      rules: [
        {
          activityIds: '.MainActivity',
          matchTime: 18000,
          resetMatch: 'app',
          matches:
            '[text="获取 Plus"] < View + @View[clickable=true][childCount=2] > [desc="关闭"] + Button',
          snapshotUrls: 'https://i.gkd.li/i/26234095',
          exampleUrls: 'https://e.gkd.li/dd8a2887-ea64-466d-b270-de7568b55af4',
        },
      ],
    },
    {
      key: 4,
      name: '通知提示-聊天记忆容量警告',
      desc: 'x掉通知',
      fastQuery: true,
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '@[desc="关闭"] < @[clickable=true][childCount=1] + * -> [text="获取 Plus" || text^="升级"][visibleToUser=true] < * + [index=parent.childCount.minus(1)] <n View[childCount=5] < View <(5,6) View[childCount>=7] <<(6,8) [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/26647576',
          exampleUrls: 'https://e.gkd.li/a53e015f-2b08-4177-80aa-b516d213b333',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alihealth.llm.assistant',
  name: '氢离子',
  groups: [
    {
      key: 1,
      name: '功能类-引用内容自动翻译',
      desc: '⚠️可能第二次无法点击(无法区分未/已翻译状态)',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.chat.AIAnswerChatActivity',
          matches:
            '@LinearLayout[clickable=true] > [text="翻译"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/28420199', // 未翻译
            'https://i.gkd.li/i/28420124', // 已翻译
          ],
          exampleUrls: 'https://e.gkd.li/4501036a-eded-4a2f-ac4d-6e2457a24234',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-文献自动翻译',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.article.ReadArticleActivity',
          actionMaximum: 2, // 可能要看原文的情况而设置
          matches:
            '@ViewGroup[clickable=true] >2 ImageView + [text="查看译文"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/28420222', // [text="查看译文"]
          excludeSnapshotUrls: 'https://i.gkd.li/i/28420227', // 已翻译
          exampleUrls: [
            'https://e.gkd.li/e8b59267-7cfe-4a9a-b421-891e6b924c75',
            'https://e.gkd.li/33fc101f-a8f9-42e8-8606-9802ccc58572',
          ],
        },
      ],
    },
  ],
});

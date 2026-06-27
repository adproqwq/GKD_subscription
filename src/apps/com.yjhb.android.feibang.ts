import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yjhb.android.feibang',
  name: '赏帮赚',
  groups: [
    {
      key: 1,
      name: '功能类-取消报名直接确认',
      desc: '跳过二次确认',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.zx.core.code.activity.MyTaskActivity',
          matches:
            '[text="确定取消报名？"] < LinearLayout + [childCount=2] >2 [text="确定"]',
          snapshotUrls: 'https://i.gkd.li/i/26903991',
          exampleUrls: 'https://e.gkd.li/eebf7a06-0263-4d0d-961f-eae45a328f08',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-上传自动选择截图',
      desc: '选中第一个并点击完成',
      fastQuery: true,
      actionMaximum: 1, // 第二次可自选
      resetMatch: 'match', // 做完一个选完截图再切app干下一步,正合此意
      activityIds: 'com.luck.picture.lib.PictureSelectorActivity',
      rules: [
        {
          key: 0,
          name: '选中第一个图片',
          matches: [
            '[text="请选择"]',
            '@LinearLayout[index=1] <2 [index=0] < [index=1] - [childCount=2] >2 [text="相机胶卷"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/26904379',
          exampleUrls: 'https://e.gkd.li/a9c0a7d1-2ffd-4718-8277-91c68919f96d',
        },
        {
          preKeys: [0],
          name: '点击已完成',
          matches: '[text="1"] + [text="已完成"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26904647',
          exampleUrls: 'https://e.gkd.li/866bc10a-b62b-4948-ad56-6206b2349054',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动领取奖励',
      desc: '每日专享=> 点击 领奖励',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.zx.core.code.activity.WebViewActivity',
          matches:
            '@[text="领奖励"][visibleToUser=true] < * <6 [childCount=6] <2 View[childCount<3] <n View[childCount=5] <n * < WebView <<4 LinearLayout <2 [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/28591915', // 1完成
            'https://i.gkd.li/i/29405634', // 3,4,5完成
          ],
          exampleUrls: 'https://e.gkd.li/b28c9e1c-d92d-413b-b30b-c994b2d3f582',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动关闭[按要求提交信息]提示',
      activityIds: 'com.zx.core.code.activity.TaskDetailsActivity',
      fastQuery: true,
      actionMaximum: 2,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '勾选[不再提醒]',
          matches:
            '[text="不再提醒"] - @View[clickable=true][focusable=true][text=null] < [childCount=2] - LinearLayout > [text^="请按照悬赏要求提交验证信息"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/29405401',
          exampleUrls: 'https://e.gkd.li/16bd85ec-1d56-48d1-a779-b68014557dee',
        },
        {
          preKeys: [0],
          name: '点击[确定]',
          matches: '[text="确定"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/29405401',
        },
      ],
    },
  ],
});

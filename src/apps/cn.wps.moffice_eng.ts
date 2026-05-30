import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wps.moffice_eng',
  name: 'WPS Office',
  groups: [
    {
      key: 1,
      name: '分段广告-首页文档列表广告',
      fastQuery: true,
      activityIds: [
        'cn.wps.moffice.main.StartPublicActivity',
        'cn.wps.moffice.documentmanager.PreStartActivity',
        'cn.wps.moffice.main.local.HomeRootActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[id="com.mopub.ad.xiaomi:id/nativeclose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12505350',
            'https://i.gkd.li/i/12505286',
          ],
        },
        {
          preKeys: [0],
          key: 99,
          matches: '[text="不喜欢此广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12505365',
            'https://i.gkd.li/i/13259090',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'cn.wps.moffice.main.AfterLoginActivity',
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          ],
          matches: '[vid="afterlogin_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13259097',
            'https://i.gkd.li/i/12882712',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches:
            '@TextView[clickable=true] -2 Image[text!=null] <<2 View - [id="app"] <<5 [vid="push_tips_ptr_super_webview"]',
          snapshotUrls: 'https://i.gkd.li/i/13945835',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'cn.wps.moffice.plugin.cloudPage.newpage.NewCloudSettingNewActivity',
          matches: '[vid="cloud_popup_close_view"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23786698',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[vid="close_new_func_guide_dialog_imageView"]',
          snapshotUrls: 'https://i.gkd.li/i/12882371',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-关闭[开启WPS云服务]弹窗',
      desc: '自动点击不开启',
      fastQuery: true,
      activityIds: [
        'cn.wps.moffice.main.cloud.roaming.login.core.QingLoginActivity',
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
        'com.tencent.mm.ui.base.w',
      ],
      rules: [
        {
          key: 1,
          matches: '[vid="cloud_protocol_dialog_not_start_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12882536',
            'https://i.gkd.li/i/12882610',
            'https://i.gkd.li/i/12882678',
          ],
        },
        {
          key: 2,
          matches: '[vid="dialog_button_positive"]',
          snapshotUrls: 'https://i.gkd.li/i/12882554',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-文档末尾广告',
      fastQuery: true,
      activityIds: 'cn.wps.moffice.writer.multiactivity.Writer',
      rules: [
        {
          key: 1,
          matches: '[vid="doc_end_ad_container_main"] >2 [vid="btn_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13513911',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[text="关闭当前广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13513914',
        },
      ],
    },
    {
      key: 6,
      name: '局部广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches:
            '[vid="home_banner_ad_spread_close" || vid="phone_message_close_button" || vid="close_home_ad_banner_iv" || vid="iv_item_close" || vid="iv_cloud_sync_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13804525',
            'https://i.gkd.li/i/17893252',
            'https://i.gkd.li/i/18047731',
            'https://i.gkd.li/i/23577590',
            'https://i.gkd.li/i/23786789',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'cn.wps.moffice.writer.multiactivity.Writer1',
          matches:
            '[vid="public_login"] <2 LinearLayout[childCount=2] + [vid="public_close"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26026279',
          exampleUrls: 'https://e.gkd.li/a17eca15-c7bd-4ea6-ba84-0d3242641697',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-自动签到',
      fastQuery: true,
      activityIds: 'cn.wps.moffice.main.push.explore.PushTipsWebActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[visibleToUser=true][text="签到"] <<n [vid="push_tips_ptr_super_webview"]',
          exampleUrls: 'https://e.gkd.li/c83fe3b0-74f2-45af-9f8d-6b70c622b424',
          snapshotUrls: 'https://i.gkd.li/i/16382069',
        },
        {
          preKeys: [0],
          key: 1,
          matches:
            '[text="签到成功"] -2 * > @Image[text!=null] <<4 [index=parent.childCount.minus(2)] <n View <<2 WebView <<4 [vid="push_tips_ptr_super_webview"]',
          exampleUrls: 'https://e.gkd.li/c8c2f3cb-9bde-4a01-8eb6-145cf668993f',
          snapshotUrls: 'https://i.gkd.li/i/16382075',
        },
      ],
    },
    {
      key: 10,
      name: '评价提示',
      rules: [
        {
          fastQuery: true,
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches: [
            '[text="喜欢WPS Office吗？"]',
            '[text="以后再说"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23714159',
        },
      ],
    },
    {
      key: 11,
      name: '其他-x掉添加至主屏幕',
      desc: '不再提示-取消',
      fastQuery: true,
      activityIds: 'cn.wps.moffice.writer.multiactivity.Writer2',
      rules: [
        {
          key: 0,
          matches:
            '[vid="dlg_add_home_cancel"] < FrameLayout - LinearLayout > [vid="dlg_add_home_checkbox"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26026325',
          exampleUrls: 'https://e.gkd.li/72ec7310-ce0d-4c43-b8ad-7d2966d6e902',
        },
        {
          preKeys: [0],
          matches:
            '@[vid="dlg_add_home_cancel"] < FrameLayout - LinearLayout > [vid="dlg_add_home_checkbox"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26026328',
          exampleUrls: 'https://e.gkd.li/e40f22fa-a74a-4a92-b816-11c1f2f2c901',
        },
      ],
    },
    {
      key: 12,
      name: '功能类-关闭[登录WPS]弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches:
            '[vid="login_viewpager"] > [vid="public_login_cancel"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/28419420',
          exampleUrls: 'https://e.gkd.li/73900c79-8d76-47ba-9dd2-853a9a30d533',
        },
      ],
    },
    {
      key: 13,
      name: '局部广告-会员功能试用提示',
      desc: '主页顶部功能试用=> x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches:
            '[vid="home_page_list_view"] [vid="card_v"] >2 LinearLayout + * > [vid="close_iv"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/28419645',
          exampleUrls: 'https://e.gkd.li/c033f70a-c2a9-43a5-83fd-519d7894d8c7',
        },
      ],
    },
  ],
});

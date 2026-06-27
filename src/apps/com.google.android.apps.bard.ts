import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.apps.bard',
  name: 'Gemini',
  groups: [
    {
      key: 0,
      name: '其他-⚠️请移步至Google应用规则页(壳App)',
      desc: '此App为壳App,不包含任何功能页面,通过`.shellapp.BardEntryPointActivity`跳转至Google应用',
      enable: false,
      rules: [{}],
    },
  ],
});

import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      enable: false,
      key: 0,
      name: '关闭花呗升级弹窗',
      activityIds: [
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        'com.alipay.android.msp.ui.views', //views.MspContainerActivity & views.MspUniRenderActivity
      ],
      matchLauncher: true,
      rules: [
        {
          key: 0,
          matches: 'View[childCount=3] > @Image - View[text="花呗服务升级"]',
          snapshotUrls: 'https://i.gkd.li/import/12737055', //com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main
        },
        {
          key: 1,
          matches: [
            '[text="根据相关法律法规要求，请尽快完成花呗升级"]',
            'FrameLayout > FrameLayout  > FrameLayout > [text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13183946', //com.alipay.android.msp.ui.views.MspContainerActivity
            'https://i.gkd.li/import/12826077', //com.alipay.android.msp.ui.views.MspUniRenderActivity
            'https://i.gkd.li/import/12915864', //matchLauncher
          ],
        },
      ],
    },
    {
      enable: false,
      key: 1,
      name: '关闭开启定位提示',
      quickFind: true,
      activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
      rules:
        '@[id="com.alipay.mobile.antui:id/closeButton"] - [id="com.alipay.mobile.antui:id/textAndButtonLayout"] [id="com.alipay.mobile.antui:id/tipTextView"][text^="开启定位权限"]',
      snapshotUrls: 'https://i.gkd.li/import/12792688',
    },
    {
      key: 2,
      name: '请求通知权限提示',
      quickFind: true,
      activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
      rules: [
        {
          key: 0,
          name: '首页底部提示',
          matches:
            '@[desc="关闭"] - * >n [id="com.alipay.mobile.antui:id/tipTextView"][text^="开启通知权限"]',
          snapshotUrls: 'https://i.gkd.li/import/13194955',
        },
      ],
    },
    {
      enable: false,
      key: 3,
      name: '版本更新提示',
      desc: '选择稍后再说',
      quickFind: true,
      activityIds: 'com.alipay.mobile.alipassapp.alkb.kb.ALPMainPage63',
      rules:
        'TextView[id="com.alipay.mobile.accountauthbiz:id/update_cancel_tv"]',
      snapshotUrls: 'https://i.gkd.li/import/13327095',
    },
    {
      enable: false,
      key: 4,
      name: '设置支付宝小组件',
      desc: '点击关闭',
      quickFind: true,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      rules: [
        {
          matches:
            '@TextView[text="关闭"] < * <3 * < * + * >3 TextView[text="设置支付宝小组件"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/13327349',
        },
      ],
    },
  ],
});

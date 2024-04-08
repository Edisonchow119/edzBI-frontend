import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'EDZ | AIGC AI系统',
  pwa: true,
  logo: 'https://p6-pc-sign.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_71dd29e456feb8fc54a8ff81cfe27b7f.jpeg?x-expires=1712754000&x-signature=2rKKFXACRgj3h6w8iPoudEec9zI%3D&from=2480802190',
  iconfontUrl: '',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  },
};

export default Settings;

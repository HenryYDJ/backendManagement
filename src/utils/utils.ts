/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

export const isAntDesignPro = (): boolean => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }
  return window.location.hostname === 'preview.pro.ant.design';
};

// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
export const isAntDesignProOrDev = (): boolean => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    return true;
  }
  return isAntDesignPro();
};

export const checkPass = (val: string) => {
  if (val === '') {
    return { success: true };
  }
  const allMap = {
    '1': {
      reg: /([\W_]+)/,
      msg: '纯特殊字符',
    },
    '2': {
      reg: /([0-9]+)/,
      msg: '纯数字',
    },
    '3': {
      reg: /([a-z]+)/,
      msg: '纯小写',
    },
    '4': {
      reg: /([A-Z]+)/,
      msg: '纯大写',
    },
  };
  const notAllow = {
    containBlankSpace: {
      success: false,
      reg: /^.*[\s].*$/i,
      msg: '不合法登录密码仅支持字母、数字或字符，不可包含空格',
    },
    containCNChar: {
      success: false,
      reg: /^.*[\u4e00-\u9fa5].*/i,
      msg: '不合法登录密码仅支持字母、数字或字符',
    },
  };
  if (val.length < 10) {
    return {
      success: false,
      msg: '密码长度至少十位。',
    };
  }
  if (
    !(
      (allMap[1].reg.test(val) && allMap[2].reg.test(val) && allMap[3].reg.test(val)) ||
      (allMap[1].reg.test(val) && allMap[3].reg.test(val) && allMap[4].reg.test(val)) ||
      (allMap[1].reg.test(val) && allMap[2].reg.test(val) && allMap[3].reg.test(val)) ||
      (allMap[2].reg.test(val) && allMap[3].reg.test(val) && allMap[4].reg.test(val))
    )
  ) {
    return {
      success: false,
      msg: '密码至少包含数字、小写字母、大写字母、特殊字符其中三种。',
    };
  }
  let error: any;
  Object.keys(notAllow).forEach((k) => {
    if (!error && notAllow[k].reg.test(val)) {
      error = allMap[k];
    }
  });
  if (error) {
    return error;
  }
  return { success: true };
};

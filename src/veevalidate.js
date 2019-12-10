import Vue from 'vue'
// 引入表单验证
import Veevalidate, {
  Validator
} from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(Veevalidate, {
  errorBagName: 'errors', // change if property conflicts.
  delay: 0,
  locale: 'zh_CN',
  messages: null,
  strict: true
})

//提示语汉化
Validator.locale === "en" ? "zh_CN" : "en";
Validator.localize(Validator.locale, {
  messages: zh_CN.messages,
  attributes: {
    account: '账号',
    password: '密码',
    rePassword: '确认密码',
    name: '用户名'
  }
})
// 扩展验证方法
Validator.extend('phone', {
  getMessage: () => `请输入正确的手机号码`,
  validate: (value) => {
    const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
    return reg.test(value)
  }
});
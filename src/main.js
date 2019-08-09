// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment';
//按需引入
import { Button, Select } from 'element-ui';

Vue.use(ElementUI);//引入element-ui
Vue.config.productionTip = false

//按需引入
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

//vue filter register
Vue.filter('strToDateTimeLite', function(value) {
  if (value)
    return moment(value).format('MM-DD HH:mm')
  return value;
});

Vue.filter('strToDateTime', function(value) {
  if (value)
    return moment(value).format('YYYY-MM-DD HH:mm:ss')
  return value;
});

Vue.filter('strToDate', function(value) {
  if (value)
    return moment(value).format('YYYY-MM-DD')
  return value;
});

Vue.filter('strToSlashDate', function(value) {
  if (value)
    return moment(value).format('DD/MM/YYYY')
  return value;
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

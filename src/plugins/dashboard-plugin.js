import '@/polyfills';
import Notifications from '@/components/NotificationPlugin';
import { configure } from 'vee-validate';
import GlobalComponents from './globalComponents';
import GlobalDirectives from './globalDirectives';
import SideBar from '@/components/SidebarPlugin';

window.axios = require('axios');

// element ui language configuration
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
locale.use(lang);

// vue-bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// asset imports
import '@/assets/scss/argon.scss';
import '@/assets/vendor/nucleo/css/nucleo.css';
import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});
export default {
  install(Vue) {
    Vue.use(GlobalComponents);
    Vue.use(GlobalDirectives);
    Vue.use(SideBar);
    Vue.use(Notifications);
    Vue.use(BootstrapVue);
    Vue.use(IconsPlugin);
    Vue.use(axios);
    configure({
      classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
        dirty: ['is-dirty', 'is-dirty'], // multiple classes per flag!
      }
    })
  }
};

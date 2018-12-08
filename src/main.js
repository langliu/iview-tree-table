import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './theme/iview-reset.less';

import iViewTreeTable from './components/iview-tree-table/index';

Vue.use(iView);
Vue.use(iViewTreeTable);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

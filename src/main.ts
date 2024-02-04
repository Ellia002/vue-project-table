import './assets/main.css'
import { createApp } from 'vue'

import Antd from 'ant-design-vue';
import STable from '@surely-vue/table';
import App from './App.vue';
import router from './router'

import 'ant-design-vue/dist/antd.less';
import '@ant-design-vue/pro-layout/dist/style.less';
import '@surely-vue/table/dist/index.less';
import '@surely-vue/table/src/style/antdv.less';

import { setLicenseKey } from '@surely-vue/table';
setLicenseKey(
    '822c4aaaf16b18cb5897a63c55902f42T1JERVI6MTAwMDExLEVYUElSWT0zMzIzNjAwNjQwMDAwMCxET01BSU49c3VyZWx5LmNvb2wsVUxUSU1BVEU9MSxLRVlWRVJTSU9OPTE=',
  );

const app = createApp(App)
app.use(router).use(Antd).use(STable);
app.mount('#app')

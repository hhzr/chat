import { createApp } from 'vue'
import App from './App.vue'
import { router } from "@/router";
import axios from "@/util/request";
import { Form, Field, CellGroup,Col, Row, NavBar, Card } from 'vant';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';
import 'vant/es/toast/style';

const app = createApp(App);
app.use(router);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Col);
app.use(Row);
app.use(NavBar);
app.use(Card);
app.mount('#app');
app.config.globalProperties.$axios = axios;

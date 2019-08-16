import Vue from 'vue'
import {
    BottomNav,
    Card,
    Button,
    Icon,

} from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
import 'muse-ui/dist/muse-ui.css';

export default () => {
    Vue.use(BottomNav);
    Vue.use(Card);
    Vue.use(Button);
    Vue.use(Icon);
}
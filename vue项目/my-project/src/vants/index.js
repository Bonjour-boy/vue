import Vue from 'vue'
import {
    //搜索框
    Search,
    //头部nav
    Tab,
    Tabs,
    //轮播图
    Swipe,
    SwipeItem,
    Lazyload,
    //宫格
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
    Icon,
    //登录
    NavBar,
    Field,
    SwitchCell,
    Button,
    Image,
    Sidebar,
    SidebarItem,

    DropdownMenu,
    DropdownItem,
    Card,
    Tag,
    List,
    //详情页
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    //购物车
    Checkbox,
    CheckboxGroup,
    Stepper,
    SubmitBar,
    Toast

} from 'vant';

export default () => {
    Vue.use(Search);
    Vue.use(Tab).use(Tabs);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Lazyload);
    Vue.use(Grid).use(GridItem);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Icon);
    Vue.use(NavBar);
    Vue.use(Field);
    Vue.use(SwitchCell);
    Vue.use(Button);
    Vue.use(Image);
    Vue.use(Sidebar);
    Vue.use(SidebarItem);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(Card);
    Vue.use(Tag);
    Vue.use(List);
    Vue
        .use(GoodsAction)
        .use(GoodsActionIcon)
        .use(GoodsActionButton);
    Vue.use(Checkbox).use(CheckboxGroup);
    Vue.use(Stepper);
    Vue.use(SubmitBar);
    Vue.use(Toast);
}
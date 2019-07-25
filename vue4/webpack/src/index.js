// console.log(20);
const Vue = require('../dist/vue');
require('../style/slect.css');

var vm = new Vue({
    el: '#demo',
    //model 数据层
    data: {
        name: [{
            id: 0,
            title: '首页'
        }, {
            id: 1,
            title: '详情'
        }, {
            id: 2,
            title: '服务'
        }],
        list: ['首页ABC', '详情DEF', '服务GHI'],
        datId: 0
    },
    template: `
    <div id="demo1">
    <dt v-for="(item,index) in name" @click="toggle(item)" :class="{active:item.id === datId}">
        <span v-text="item.title"></span>
        </dt>
    <dd v-for="(item,index) in list" v-text="item" v-if="index===datId"></dd>

    </div>
    `,
    methods: {
        toggle(item) {
            // console.log(666);
            vm.datId = item.id

        }

    }
}, );
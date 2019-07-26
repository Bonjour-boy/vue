const Vue = require('../dist/vue');
const template = require('./header.html');
require('./header.css');


Vue.component('lx.header', {
    data: function () {
        return {
            // name: '你好123456你好123456你好123456'
        }
    },
    props: ['title', 'align', 'inWidth', 'bg'],
    template,
    watch: {
        title() {
            console.log(this.title);
            return this.title
        }
    },
    computed: {
        nameEn() {
            let nameEn = `<b style="color:red">{{this.name}}</b>`
            return nameEn
        }

    }
});


new Vue({
    el: '#demo',
    data: {
        title: ['未能获取地址', '选择收货地址', '你好123456你好123456你好123456'],
        align: ['left', 'center'], //title对齐方式
        inWidth: ['400px', '320px'], //input标签width
        bg: '#eee', //input标签background
    },
    template: `
        <div>
        <lx.header :title="title[0]" :align="align[0]" :inWidth="inWidth[0]"></lx.header>
        <lx.header :title="title[1]" :align="align[1]" :inWidth="inWidth[1]" :bg="bg"><p>选择...</p></lx.header>
        <lx.header :title="title[2]"></lx.header>
        </div>
    `,

});
/**
 * Created by duoyi on 2016/10/21.
 */
import html from './index.html'

var $ = require('jquery');
require('./style.css');

module.exports = {
    template: html,

    replace: true,
    /**
     * params.page 当前所在页数（整型）
     * params.size 分页大小（整型）20
     * params.totalCount 数据总数（整型）
     */
    'props': ['params','cb'],
    'data': function () {
        return {
            'jump': null,
            'numberOfPage': 1, //总页数
            'paginationSize': 5, //分页页面的最大存在数
            'midIndex': 3 //中间默认index=3
        };
    },
    'compiled': function () {
        this.init();
    },
    'watch': {
        'params': {
            'handler': function () {
                this.init();
                this.cb && this.cb();
            },
            'deep': true
        }
    },
    'methods': {
        'init': function () {
            var numberOfPage = Math.ceil(this.params.totalCount / this.params.size);
            this.numberOfPage = numberOfPage === 0 ? 1 : numberOfPage;
        },
        'jumpToPage': function () {
            var page = parseInt(this.jump);
            if (isNaN(page)) {
                //console.warn('[warn]:must be number!');
                return;
            }
            if (page < 1 || page > this.numberOfPage) {
                this.jump = null;
                //console.warn('[warn]:page range error!');
                return;
            }
            this.params.page=page;
           // this.$route.router.go(this.getRouteObj(page));
        },
        'getRouteObj': function (page) {
            this.params.page=page;
            /*console.log(page,this.$route);
            var route = {'name': this.$route.name};
            route.params = $.extend(true, {}, this.$route.params);
            route.query = $.extend(true, {}, this.$route.query);
            route.query.page = page;
            return route;*/
        }
    },
    'computed': {
        'pageArr': {
            'cache': false,
            'get': function () { //核心计算函数
                var arr = [];
                if(this.numberOfPage>this.paginationSize){

                    if(this.params.page<=this.midIndex){
                        for(var j = 1 ;j<=this.paginationSize;j++){
                            arr.push(j);
                        }
                    }else{
                        if(this.params.page>=this.numberOfPage-this.midIndex){
                            for(var k = this.numberOfPage-this.paginationSize+1 ;k<=this.numberOfPage;k++){
                                arr.push(k);
                            }
                        }else{

                            for(var x = this.params.page-this.midIndex+1,y=0 ;y<this.paginationSize;x++){
                                arr.push(x);
                                y++;
                            }
                        }
                    }
                }else{
                    for(var i = 1 ;i<=this.numberOfPage;i++){
                        arr.push(i);
                    }
                }
                return arr;
            }
        }
    }
};


/**
 * Created by duoyi on 2016/9/14.
 */
/**
 * Created by duoyi on 2016/9/8.
 */
import html from './app.html'
import side from '../componment/side'

import storeoption from './home/shangpingoption'
import mingxi from './home/mingxi'
import xiadan from './home/xiadan'
import chaxun from './home/chaxun'

import jiekuan from './kehu/jiekuan'
import huangkuan from './kehu/huangkuan'
import qiankuanchaxun from './kehu/qianchaxun'
import kehuoption from './kehu/kehuOption'

import feemingxi from './fee/feemingxi'
import feedan from './fee/feedan'
import feeoption from './fee/feeoption'

import baosun from './origin/baosun'
import jinchumingxi from './origin/jinchumingxi'
import jinhuo from './origin/jinhuo'
import kucun from './origin/kucun'

import report from './report'

import result from './supply/result'
import supplyoption from './supply/supplyoption'
import zhuanzhang from './supply/zhuanzhang'
import $ from 'jquery'


export default {

    template: html,

    replace: true,

    props: {

    },

    data () {
        return {

        }
    },
    /*route:{
        data(){
            this.mypage.page=this.$route.query.page;
            this.search();
            console.log(this.mypage.page,233)
        }
    },*/
    ready (){
        $.datepicker.regional["zh-CN"] = { closeText: "关闭", prevText: "&#x3c;上月", nextText: "下月&#x3e;", currentText: "今天", monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"], dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"], weekHeader: "周", dateFormat: "yy-mm-dd", firstDay: 1, isRTL: !1, showMonthAfterYear: !0, yearSuffix: "年" };
        $.datepicker.setDefaults($.datepicker.regional["zh-CN"]);
    },
    components : {
           /* side: side,
            xiadan: xiadan,
            mingxi: mingxi,
            storeoption: storeoption,
            chaxun:chaxun,

            jiekuan:jiekuan,
            kehuoption:kehuoption,
            huangkuan:huangkuan,
            qiankuanchaxun:qiankuanchaxun,

            feemingxi:feemingxi,
            feedan:feedan,
            feeoption:feeoption,

            baosun:baosun,
            jinchumingxi:jinchumingxi,
            jinhuo:jinhuo,
            kucun:kucun,

            report:report,

            result:result,
            supplyoption:supplyoption,
            zhuanzhang:zhuanzhang,*/



    }
}
/**
 * Created by kimy on 2016/10/22.
 */
/**
 * Created by duoyi on 2016/9/14.
 */
/**
 * Created by duoyi on 2016/9/8.
 */
import html from './index.html'

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
   
    ready (){
        //汉化datepicker
       
    },
    components : {
        side: side,
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
        zhuanzhang:zhuanzhang



    }
}
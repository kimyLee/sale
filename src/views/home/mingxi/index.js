/**
 * Created by duoyi on 2016/9/8.
 */
/**
 * Created by duoyi on 2016/9/8.
 */
import $ from 'jquery'
import html from './template.html'
import datepicker from '../../../componment/datepicker'
import dropdown from '../../../componment/dropdown'
import api from 'api'

export default {

    template: html,

    replace: true,

    props: {

    },

    data () {
        return {
           beginDate:"",
           endDate:""
        }
    },

    ready (){
        console.log("hello2");
    },
    components : {
        datepicker,
        dropdown
    }

}
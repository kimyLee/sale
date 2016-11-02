/**
 * Created by duoyi on 2016/9/8.
 */
/**
 * Created by duoyi on 2016/9/8.
 */
import html from './template.html'
import $ from 'jquery'

export default {

    template: html,

    replace: true,

    props:['date'],

    data () {
        return {

        }
    },

    ready (){
        var day = new Date();
        if(!this.date){
            this.date=day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate()
        }
        $(this.$el).datepicker();
    }
}
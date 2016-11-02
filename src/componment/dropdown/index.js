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

    props: ['placeholder','list','word'],

    data () {
        return {
            index:-1
        }
    },
    ready (){
        $('body').on('click',function () {
            this.list=[]
        })
    },
    methods:{
        search (){
            this.$emit('search',this.word||'')
        },
        selectWord (item){
            this.$emit('select',item)
           
            this.list=[];
        },
        plusIndex(){
            this.index=(this.index+1)>=this.list.length?0:this.index+1;
        },
        minusIndex(){
            this.index=(this.index-1)<0?this.list.length-1:this.index-1;
        },
        select(){
            if(this.list&&this.list.length>0&&this.index>=0){
                this.selectWord(this.list[this.index])
            }
        }
    }
}
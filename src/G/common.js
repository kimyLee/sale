import $ from 'jquery'
const COMMON = {
    //TODO:全局方法
    loading () {
        console.log('loading');
        clearTimeout(window.Timer)
    },
    closeLoad (){
        console.log('close')
    },
    deepClone(obj){

        var o, obj;
        if (obj.constructor == Object) {
            o = new obj.constructor();
        } else {
            o = new obj.constructor(obj.valueOf());
        }
        for (var key in obj) {
            if (o[key] != obj[key]) {
                if (typeof(obj[key]) == 'object') {
                    o[key] = clone2(obj[key]);
                } else {
                    o[key] = obj[key];
                }
            }
        }
        o.toString = obj.toString;
        o.valueOf = obj.valueOf;
        return o;
    }

}
export  default COMMON;
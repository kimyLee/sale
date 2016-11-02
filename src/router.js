/**
 * Created by duoyi on 2016/9/14.
 */
import home from './views/index.js';
function myrouter(router) {
    router.map({
        '/': {
            name:'home',
            component: home
        }


    })
}
export  default myrouter;
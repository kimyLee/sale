/***
 * Created by duoyi on 2016/10/10.
 */

import AJAX from './promise'
export default {
    //下单
    sale(data,cb,fail){
        AJAX({
            type:'POST',
            url:'sales/sale',
            data:data
        },cb,fail)
    },
    //匹配客户
    searchCustomer (data , cb) {
        AJAX({
            type:'GET',
            url:'customers/search',
            data:{key:data}
        },cb)
    },

    //匹配商品
    searchGoods (data , cb) {
        AJAX({
            type:'GET',
            url:'goods/search',
            data:{key:data}
        },cb)
    },
//匹配供应商
    searchSuppliers (data , cb) {
        AJAX({
            type:'GET',
            url:'suppliers/supplier',
            data:{key:data}
        },cb)
    },

    //添加商品
    /***{
     "spell": "拼音码",
     "name": "名称",
     "unit": "单位",
     "weighFee": 1,
     "packFee": 76,
     "supplier": "supplier1",
     "inventory": 3456
     }*/
    addGoods (data ,cb) {
        AJAX({
            type:'POST',
            url:'goods/good',
            data:data
        },cb)
    },

    //删除商品 todo:参数？下标？
    delGoods (data , cb) {
        AJAX({
            type:'DELETE',
            url:'goods/good',
            data:data
        },cb)
    },

    //修改商品
    /***{
     "id": 4,
     "spell": "拼音码",
     "name": "名称",
     "unit": "单位",
     "weighFee": 1,
     "packFee": 76,
     "supplier": "supplier1",
     "inventory": 3456
     }*/
    correctGoods (data , cb) {
        AJAX({
            type:'PUT',
            url:'goods/good',
            data:data
        },cb)
    },

    //添加客户
    /**{
     "spell": "wert",
     "loan": 34,
     "phone": "34556",
     "name": "ert",
     "remark": "dfg",
     "credit": 35
     }*/
    addCustomer (data , cb) {
        AJAX({
            type:'POST',
            url:'customers/customer',
            data:data
        },cb)
    },

    //删除客户
    delCustomer (data , cb) {
        AJAX({
            type:'DELETE',
            url:'customers/customer',
            data:data
        },cb)
    },

    //修改客户
    /**{
     "spell": "wert",
     "loan": 34,
     "phone": "34556",
     "name": "ert",
     "remark": "dfg",
     "credit": 35
     }*/
    correctCustomer (data , cb) {
        AJAX({
            type:'PUT',
            url:'customers/customer',
            data:data
        },cb)
    },

    //客户查询 todo:分页 customers/query?pageNum=1&pageSize=3
    checkCustomer (data , cb) {
        AJAX({
            type:'GET',
            url:'customers/query',
            data:data
        },cb)
    },

    //商品查询  goods/query?pageNum=1&pageSize=3
    checkGoods (data , cb) {
        AJAX({
            type:'GET',
            url:'goods/query',
            data:data
        },cb)
    },

    //销售单查询 sales/query?startDate=2016-06-03&endDate=2016-06-05
    checkSaleTicket (data , cb) {
        AJAX({
            type:'GET',
            url:'sales/query',
            data:data
        }).done(function (d) {
            cb&&cb(d)
        })
    },

    //销售单详情信息 sales/detail?id=10
    checkSaleTicketById (data , cb) {
        AJAX({
            type:'GET',
            url:'sales/detail',
            data:data
        },cb)
    },

    //客户前欠金额 customers/loan?id=2
    checkLoanMoney (data , cb) {
        AJAX({
            type:'GET',
            url:'customers/loandetails',
            data:data
        },cb)
    },

    //客户借还款信息
    /**{
     "cId": 2,
     "cSpell": "sdf",
     "cName": "sdf",
     "money":45.0,
     "type": 0,
     "remark": "hello"
     }*/
    checkLoanInfo (data , cb) {
        AJAX({
            type:'POST',
            url:'customers/debit',
            data:data
        },cb)
    },

    //商品销售 sales/goods?startDate=2016-06-03&endDate=2016-06-06&supplier=
    checkGoodsSale (data , cb) {
        AJAX({
            type:'GET',
            url:'sales/goods',
            data:data
        },cb)
    },

    //商品销售id  sales/good?startDate=2016-06-03&endDate=2016-06-06&id=1
    checkGoodsSaleById (data , cb) {
        AJAX({
            type:'GET',
            url:'sales/goods',
            data:data
        },cb)
    },

    //增加费用
    /**{
     "spell": "spell",
     "name": "name",
     "supplier": "hhh1"
     }*/
    addFee (data , cb) {
        AJAX({
            type:'POST',
            url:'costs/cost',
            data:data
        },cb)
    },

    //修改费用
    correctFee (data , cb) {
        AJAX({
            type:'PUT',
            url:'costs/cost',
            data:data
        },cb)
    },

    //删除费用
    deleteFee (data , cb) {
        AJAX({
            type:'DELETE',
            url:'costs/cost',
            data:data
        },cb)
    },

    //匹配费用 costs/search?key=s key表示id或者拼音码开头的关键字
    patchFee (data , cb) {
        AJAX({
            type:'GET',
            url:'costs/search',
            data:{key:data}
        },cb)
    },

    //查询费用 costs/query?pageNum=1&pageSize=2
    //http://localhost:8080/costs/queryCostOrder?startDate=2016-06-03&endDate=2016-06-15&delete=0
    checkFee (data , cb) {
        AJAX({
            type:'GET',
            url:'costs/query',
            data:data
        },cb)
    },

    //添加费用单 costs/costOrder
    /**{
     "spell": "spell",
     "name": "name",
     "supplier": "ggg",
     "money": 234,
     "remark": "kkk",
     "date": "2016-06-14",
     "delete": 0
     }*/
    addFeeTicket (data , cb) {
        AJAX({
            type:'POST',
            url:'costs/costOrder',
            data:data
        },cb)
    },

    //查询费用单 costs/queryCostOrder?startDate=2016-06-03&endDate=2016-06-15&delete=0
    checkFeeTicket (data , cb) {
        AJAX({
            type:'GET',
            url:'costs/queryCostOrder',
            data:data
        },cb)
    },

    //删除（更改状态为已删除） costs/deleteCostOrder  1
    deleteFeeTicket (data , cb) {
        AJAX({
            type:'PUT',
            url:'costs/deleteCostOrder',
            data:data
        },cb)
    },

    //添加进货、报损、盘点
    /**{
     "type": 1,
     "date": "2016-06-17",
     "totalCountUnit": 23,
     "totalCount": 34,
     "carNum": "34",
     "totalValue": 2345.0,
     "goods": [
     {
     "gId": 2,
     "gSpell": "dabaicai",
     "gName": "大白菜",
     "gSupplier": "hfgh",
     "unit": "件",
     "price": 23,
     "countUnit": 45,
     "count": 34
     }]*/
    addInGoods (data , cb,fail) {
        AJAX({
            type:'POST',
            url:'stocks/stock',
            data:data
        },cb,fail)
    },

    //查询进出货记录 stocks/inoutorder?startDate=2016-06-03&endDate=2016-06-18&type&supplier
    checkIORecord (data, cb) {
        AJAX({
            type: 'GET',
            url: 'stocks/inoutorder',
            data: data
        }, cb)
    },

    //添加供应商
    /**{
     "name": "hh",
     "phone": "13573444556"
     }*/
    addSupplier (data, cb) {
        AJAX({
            type: 'POST',
            url: 'suppliers/supplier',
            data: data
        }, cb)
    },

    //更新供应商  多了"id": "1",
    updateSupplier (data, cb) {
        AJAX({
            type: 'PUT',
            url: 'suppliers/supplier',
            data: data
        }, cb)
    },
    //删除供应商
    Supplier (data, cb) {
        AJAX({
            type: 'DELETE',
            url: 'suppliers/supplier',
            data: data
        }, cb)
    },
    checkSupplier (data, cb) {
        AJAX({
            type: 'GET',
            url: 'suppliers/supplier',
            data: data
        }, cb)
    },

    //查询

    //添加用户
    //修改密码
    //登录验证
    //添加转账单
    //查询转账单
    //更改总金额
    //查询现存金额

    //增加结算方式
    addResultWay(data,cb,fail){
        AJAX({
            type: 'POST',
            url: 'suppliers/settlement',
            data: data
        }, cb,fail)
    },
    //查询结算方式
    CheckResultWay(data,cb,fail){
        AJAX({
            type: 'GET',
            url: 'suppliers/settlement',
            data: data
        }, cb,fail)
    }
    //删除结算方式
    //报表按供货商
    //报表按商品





}
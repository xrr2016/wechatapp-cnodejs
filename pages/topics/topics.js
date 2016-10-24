const Api = require('../../utils/api.js')

Page({
    data:{
        title:'首页列表'
        },
    onLoad:function(){
        console.log('title')
        this.fetchData()
    },
    fetchData:function(data){
        if(!data){
            data = {}
        }
        if(!data.page){
            data.page = 1
        }
        wx.request({
            url:Api.getTopics(data),
            success:function(res){
                console.log(res)
            }
        })
    }   
})
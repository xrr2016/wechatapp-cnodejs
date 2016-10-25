const Api = require('../../utils/api.js')
const util = require('../../utils/util.js')

Page({
  data:{
        user:{
          loginname:'',
          createAt:'',
          avatar:'',
          score:0,
          topics:[]
        },
        hidden:false
  },
  onLoad:function(options){
      this.getData()
  },
  onPullDownRefresh:function(){
      this.getData()
  },
  getData:function(){
      let self = this,
          name = "xrr20160322",
          url  =  Api.getUser(name)
      wx.request({
          url:url,
          success:function(res){
              let data = res.data
              self.setData({
                "user.loginname":data.loginname,
              })
              console.info(self.data.user.loginname)
              setTimeout(function(){
                    self.setData({
                        hidden:true
                    })
                },300)
          }
      })
  },
  postTopic:function(){
      wx.redirectTo({
          url:"/pages/postTopic/postTopic"
      })
  }
})
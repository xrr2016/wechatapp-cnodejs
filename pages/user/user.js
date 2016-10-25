const Api = require('../../utils/api.js')
const util = require('../../utils/util.js')

Page({
  data:{
    loginname:"",
    createAt:"",
    avatar:"",
    score:0,
    topics:[],
    name:'alsotang',
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
          user = this.data.user,
          url  =  Api.getUser(self.data.name)
      wx.request({
          url:url,
          success:function(res){
              let data = res.data.data
              console.log(data)
              self.setData({
                loginname:data.loginname,
                createAt:data.create_at.slice(0,10),
                avatar:data.avatar_url,
                score:data.score,
                topics:data.recent_topics
              })
              console.log(self.loginname)
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
  },
  login:function(){

  }
})
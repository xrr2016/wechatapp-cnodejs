'use strict'

const  url = "https://cnodejs.org/api/v1",
       topics = "/topics",
       topic  = "/topic/"

function obj2uri(obj){
    return Object.keys(obj).map(function(k){
        return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k])
    }).join('&')
}

module.exports = {
    getTopics:function(obj){
        return url + topics + '?' + obj2uri(obj)
    },
    getTopicById:function(id,obj){
        return url+topic+id+'?'+obj2uri(obj)
    }
}
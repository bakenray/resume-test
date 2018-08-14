window.Model = function(options){
    let resourceName = options.resourceName
    return {
        init:function(){
            var APP_ID = '2d8S7eYu4gkQCuSL2eDevnmI-gzGzoHsz'
            var APP_KEY = 'RsEPLODtWP6eMz5JoK5t8mW7'
            AV.init({ appId: APP_ID,appKey: APP_KEY})
        },
        // 获取数据
        fetch: function(){
            var query = new AV.Query(resourceName)
            return query.find()
        },
        // 新建数据
        save: function(object){
            var Message = AV.Object.extend(resourceName)  
            var message = new Message()
            return message.save(object)
        }
    }
}


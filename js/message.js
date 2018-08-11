!function(){
    let view = document.querySelector('#message')
    let model = {
        init:function(){
            var APP_ID = '2d8S7eYu4gkQCuSL2eDevnmI-gzGzoHsz'
            var APP_KEY = 'RsEPLODtWP6eMz5JoK5t8mW7'
            AV.init({ appId: APP_ID,appKey: APP_KEY})
        },
        // 获取数据
        fetch: function(){
            var query = new AV.Query('Message')
            return query.find()
        },
        // 新建数据
        save: function(name,content){
            var Message = AV.Object.extend('Message')  
            var message = new Message()
            return message.save({
                name:name,
                content: content
            })
        }
    }
    let controller = {
        view:null,
        model:null,
        init:function(view,model){
            this.view = view
            this.model = model
            this.model.init()
            this.messageList = view.querySelector('#messageList')
            this.messageForm = view.querySelector('#postMessageForm')         
            this.loadMessage()
            this.bindEvents()          
        },
        loadMessage:function(){
            this.model.fetch()
                .then( (messages)=> {    
                    let array = messages.map((item)=> item.attributes)
                    array.forEach((item)=>{
                        let li = document.createElement('li')
                        li.innerText =`${item.name} : ${item.content }`
                        this.messageList.appendChild(li)
                    })
                })
        },
        bindEvents:function(){
            this.messageForm.addEventListener('submit',(e)=>{   
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage:function(){
            let name = this.messageForm.querySelector('input[name=name]').value
            let content = this.messageForm.querySelector('input[name=content]').value
            this.model.save(name,content)
            .then((object) =>{
                  alert('上传成功！');
                  let li = document.createElement('li')
                  li.innerText =`${object.attributes.name} : ${object.attributes.content }`
                  this.messageList = document.querySelector('#messageList')
                  this.messageList.appendChild(li)
                  this.messageForm.querySelector('input[name=content]').value =''
                })
        }
    }
    controller.init(view,model)
}.call()

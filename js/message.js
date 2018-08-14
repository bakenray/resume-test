!function(){

    let model = Model({resourceName:'Message'})
    let view = View('#message')

    let controller = Controller({
        messageList:null,
        init:function(view,controller){
            this.messageList = view.querySelector('#messageList')
            this.messageForm = view.querySelector('#postMessageForm') 
            this.loadMessage()
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
            this.model.save({'name':name, 'content':content})
            .then((object) =>{
                  alert('留言成功！');
                  let li = document.createElement('li')
                  li.innerText =`${object.attributes.name} : ${object.attributes.content }`
                  this.messageList = document.querySelector('#messageList')
                  this.messageList.appendChild(li)
                  this.messageForm.querySelector('input[name=content]').value =''
                })
        }

    })
    controller.init(view,model)
}.call()

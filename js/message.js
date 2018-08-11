// 初始化
var APP_ID = '2d8S7eYu4gkQCuSL2eDevnmI-gzGzoHsz';
var APP_KEY = 'RsEPLODtWP6eMz5JoK5t8mW7';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
// 初始化结束

// // 测试 创建TestObject表
// var TestObject = AV.Object.extend('TestObject');
// // 在表中创建一行数据
// var testObject = new TestObject();
// // 数据内容是 words: 'Hello World' 保存
// // 如果保存成功，则运行alert()
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })

var query = new AV.Query('Message')
query.find()
    .then(function (messages) {    
        let array = messages.map((item)=> item.attributes)
        array.forEach((item)=>{
            let li = document.createElement('li')
            li.innerText =`${item.name} : ${item.content }`
            messageList = document.querySelector('#messageList')
            messageList.appendChild(li)
        })
    })

let messageForm = document.querySelector('#postMessageForm')
messageForm.addEventListener('submit',function(e){   
    e.preventDefault()
    let name = messageForm.querySelector('input[name=name]').value
    let content = messageForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend('Message')  
    var message = new Message()
    message.save({
        name:name,
        content: content
        })
    .then(function(object) {
          alert('上传成功！');
          let li = document.createElement('li')
          li.innerText =`${object.attributes.name} : ${object.attributes.content }`
          messageList = document.querySelector('#messageList')
          messageList.appendChild(li)
          messageForm.querySelector('input[name=content]').value =''
        })
})

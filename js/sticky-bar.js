    //导航滚动时吸附页面顶部
    !function(){
    var view = View('#navBar')
    var controller = {
        view: null,
        init: function(view){
              this.view = view
              this.bindEvents()
              //this.bindEvents.call(this)
         },
         bindEvents:function(){
             var view = this.view
            window.addEventListener('scroll',(x)=>{
                (window.scrollY>0) ? this.active(): this.delactive()
               })
         },
         active:function(){
            this.view.classList.add('sticky')
         },
         delactive:function(){
            this.view.classList.remove('sticky')
        }
    }
    controller.init(view)
    //controller.init.call(controller,view)
    //如果你是用对象来调用里面的函数的，那么这个对象就是这个函数里的this
}.call()
    !function(){
        var view = View('nav.menu')
        var controller= {
            view:null,
            init:function(view){
                this.view = view
                this.initAnimation()
                this.bindEvents()
            },
            initAnimation:function(){
                function animate(time){
                    requestAnimationFrame(animate)
                    TWEEN.update(time)
                }
                requestAnimationFrame(animate)
            },
            scrollToElement:function(element){
                let top = element.offsetTop
                let currentTop = window.scrollY
                let targetTop = top-80
                let s = targetTop - currentTop // 距离
                var coords = { y: currentTop }//起始位置
                var t = Math.abs((s/100)*250) //时间
                if(t>500){ t=500 }
                var tween = new TWEEN.Tween(coords) //起始时间
                .to({ y: targetTop}, t)   //结束为止和时间
                .easing(TWEEN.Easing.Quadratic.InOut)//缓动类型
                .onUpdate(function(){            //coords.y改变
                    window.scrollTo(0,coords.y) //更新页面
                })
                .start();  //开始缓动
            },
            bindEvents:function(){
                let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
                for(let i=0; i<aTags.length; i++){
                    aTags[i].onmouseenter = function(x){
                        x.currentTarget.classList.add('active')      
                    }
                    aTags[i].onmouseleave = function(x){
                        x.currentTarget.classList.remove('active') 
                    }
                    aTags[i].onclick = (x)=>{
                        x.preventDefault()
                        let a = x.currentTarget
                        let href = a.getAttribute('href')
                        let element = document.querySelector(href)
                        this.scrollToElement(element)
                    }
                }
            }
        }
    controller.init(view)
    }.call()

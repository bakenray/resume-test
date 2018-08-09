    !function(){
        //添加一个offset类，设置所有版块默认往下移一段距离
        let specialTags =document.querySelectorAll('[data-x]')
        for(var i=0;i<specialTags.length;i++){
            specialTags[i].classList.add('offset')
        }
        //延迟一秒后，执行当前模块溢出offset类，首屏向上弹出
        setTimeout(function(){  
            scrollContrl()  
            },1000)
        //页面滚动时，滚动到指定位置的模块，溢出offset类，版块向上弹出
        window.addEventListener('scroll',function(x){
            scrollContrl()
        })
        //执行的封装函数
        function scrollContrl(){
            let specialTags =document.querySelectorAll('[data-x]')
                let minIndex  = 0
                for(let i =1; i<specialTags.length;i++){
                    if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY) ){
                        minIndex = i
                    }
                }
                specialTags[minIndex].classList.remove('offset')

                let id = specialTags[minIndex].id
                let a = document.querySelector('a[href="#' + id +'"]')
                let li =a.parentNode
                let brotherAndMe = li.parentNode.children
                for(let i= 0;i<brotherAndMe.length;i++){
                    brotherAndMe[i].classList.remove('heighlight')
                }
                li.classList.add('heighlight')
        }
    }.call()
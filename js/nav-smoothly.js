
    let liTags = document.querySelectorAll('nav.menu > ul > li')
    function animate(time){
        requestAnimationFrame(animate)
        TWEEN.update(time)
    }
    requestAnimationFrame(animate)
    //添加鼠标移上出现横条
    for(let i=0; i<liTags.length; i++){
        liTags[i].onmouseenter = function(x){
            x.currentTarget.classList.add('active')      
        }
        liTags[i].onmouseleave = function(x){
            x.currentTarget.classList.remove('active') 
        }
    }

    let aTags = document.querySelectorAll('nav.menu > ul > li >a')

    for(let i= 0; i< aTags.length; i++){
        aTags[i].onclick = function(x){
            x.preventDefault()
            let a = x.currentTarget
            let href = a.getAttribute('href')
            let element = document.querySelector(href)
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
    }
}
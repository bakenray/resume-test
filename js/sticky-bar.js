    //导航滚动时吸附页面顶部
    window.addEventListener('scroll',function(x){
        (window.scrollY>0) ? navBar.classList.add('sticky') : navBar.classList.remove('sticky')
    })
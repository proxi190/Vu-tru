window.addEventListener('scroll',()=>{
    var wScroll = window.scrollY;
    console.log(wScroll);
    const para = document.getElementsByClassName("mainhistory-starimag")[0];
    para.style.transform = 'translate(0px, '+ wScroll/(window.innerHeight) +'%)';
    if (wScroll>2300){
        document.body.style.backgroundColor = '#000021'
    }
    else {
        document.body.style.backgroundColor = 'rgba(14, 14, 21, 0.1)' 
    }
});




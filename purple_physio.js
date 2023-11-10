/* open nav menu if mobile phone */
function open_menu (){
    const is_mobile = document.querySelector('.is-mobile');

    is_mobile.style.display = 'block'
    is_mobile.style.position = 'fixed'
    
    document.querySelector('.close').style.display = 'inline'
    document.querySelector('.menu').style.display = 'none'
    document.querySelector('nav').setAttribute('aria-open', 'true')
    document.querySelector('main').style.display = 'none'
}

/* close nav menu if mobile */
function close_menu(){

    const is_mobile = document.querySelector('.is-mobile');

    is_mobile.style.display = 'none'
    is_mobile.style.position = 'static'
   
    document.querySelector('.menu').style.display = 'inline'
    document.querySelector('.close').style.display = 'none'
    document.querySelector('nav').setAttribute('aria-open', 'false')
    document.querySelector('main').style.display = 'block'
}

let menu_button = document.querySelector('.menu').onclick = open_menu
let close_button = document.querySelector('.close').onclick = close_menu









const handleWindowResize = () => {
    const currentWidth = window.innerWidth;
    let menu_status = document.querySelector('nav');

    // Add your logic based on the current window width
    if (currentWidth > 750) {
        document.querySelector('.menu').style.display = 'none'
        document.querySelector('.is-mobile').style.display = 'none'
        document.querySelector('.close').style.display = 'none'
        menu_status.setAttribute('aria-open', 'false')
        
    }
    else if (currentWidth < 750 && menu_status.getAttribute('aria-open') == 'false'){
        document.querySelector('.menu').style.display = 'inline'
    }
    
};

//  event listener to the window's resize event
window.addEventListener('resize', handleWindowResize);

// Initial call to handleWindowResize to handle the initial window size
handleWindowResize();





/* To apply shadow to nav element */
function apply_shadow(){
    let scroll_value = window.scrollY

    if (scroll_value > 80) {
        document.querySelector('nav').style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.1)'
    }

    else {
        document.querySelector('nav').style.boxShadow = 'none'
    }
}


document.addEventListener('scroll', apply_shadow);



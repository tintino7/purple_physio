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





const book_appointment_buttons = document.querySelectorAll('.book-appoinment');
const book_appointment_button_arr = Array.from(book_appointment_buttons)
const user_form_section = document.querySelector('.user-form-section');

let user_form_children = document.querySelectorAll('.user-form-child')
let user_form_children_arr = Array.from(user_form_children)

const user_form = document.querySelector('.user-form')
const user_form_button = document.querySelector('.user-form-button')


/* select success and failure alert message divs */
const success = document.querySelector('.success')
const failure = document.querySelector('.failure')


const user_form_input = document.querySelectorAll('.user-form-input')

const url = 'https://script.google.com/macros/s/AKfycbzq4S4vBVv6kUsP-0HSjI3FoyV8OZavZK7RwWj1Atj_wMSn1Kg7Pr26HZyoVY2Tg9GK/exec'


/* when form get submitted */
user_form.addEventListener('submit', (event) => {

    event.preventDefault();

    /* disable the button so user can't spam the button */
    user_form_button.disabled = true

    const form_data = new FormData(event.target);


    /* submit the data tto google sheet */
    fetch(url, {method : 'POST', body : form_data})

    .then(user_form_input.forEach( input => {
        input.value = ''
    }))
    
    .then(respoce => {
        if (respoce.status == 200){
            
            /* enable the button */
            user_form_button.disabled = false;

            /* Hide user form section */
            user_form_section.style.top = '-1000px';
            user_form_section.style.left = '-1000px';
            user_form_section.setAttribute('aria-active', 'false')
            document.body.style.overflowY = ''
            document.body.style.paddingRight = '0'

            /* Show success message */
            success.style.display = 'block'
        }    
        else {
            /* enable the button */
            user_form_button.disabled = false;

            /* Hide user form section */
            user_form_section.style.top = '-1000px';
            user_form_section.style.left = '-1000px';
            user_form_section.setAttribute('aria-active', 'false')
            document.body.style.overflowY = ''
            document.body.style.paddingRight = '0'

            /* Show success message */
            failure.style.display = 'block'

        }

        /* After time out hide the alert */
        setTimeout(() => {
            success.style.display = 'none';
            failure.style.display = 'none';
        }, 4000);
    })




    

    

})


document.addEventListener('click', (event) => {
    

    let aria_status = user_form_section.getAttribute('aria-active')
    console.log('called')
    

    if (event.target != user_form && !user_form_children_arr.includes(event.target) && aria_status == 'true' ){
        user_form_section.style.top = '-1000px';
        user_form_section.style.left = '-1000px';
        user_form_section.setAttribute('aria-active', 'false')
        document.body.style.overflowY = ''
        document.body.style.paddingRight = '0'

        console.log('close')
    }
    else if(book_appointment_button_arr.includes(event.target) && aria_status == 'false'){
        user_form_section.style.top = '0';
        user_form_section.style.left = '0';
        user_form_section.setAttribute('aria-active', 'true')
        document.body.style.overflowY = 'hidden'

        if (window.innerWidth > 1000){
            document.body.style.paddingRight = '18px'
        }
        
        console.log('open')
    }
})
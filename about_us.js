function slidesChooser(){
    if(window.innerWidth > 1300){
        return document.querySelector('.corousal-large').querySelectorAll(".carousel-slide");
    }
    else {
        return document.querySelector('.courousal-medium').querySelectorAll(".carousel-slide");
    }
}





const slides = slidesChooser();
const totalSlides = slides.length;
let currentSlide = 0;


function calculateOffset(index, i){
    
    /* if it is last slide we have to position first slide after the last slide */
    if(index == totalSlides - 1){
        if(i == 0){
            return 100
        }
        else if( i == totalSlides - 1){
            return 0;
        }
        else{
            return (i - index) * 100;
        }
    }
    
    else if(index == 0){
        if(i == 0){
            return 0;
        }
        else if(i == totalSlides - 1){
            return -100;
        }
        else{
            return (i - index) * 100;
        }
    }
    /* if it is not last slide just position them as they are */
    else {
        return (i - index) * 100;
    }
}


function showSlide(index){
    slides.forEach((slide, i) => {
        if(index != 0){

            const offset = calculateOffset(index, i);
            if(index === i || index - 1 === i){
            slide.style.transition = 'transform 2s ease';
            }
        
            else {
                slide.style.transition = 'none';
            }
            slide.style.transform = `translateX(${offset}%)`;
        }
        else{
            const offset = calculateOffset(index, i)
            if(i == 0 || i == totalSlides - 1){
                slide.style.transition = 'transform 2s ease';
            }
            else{
                slide.style.transition = 'none';
            }
            slide.style.transform = `translateX(${offset}%)`;
        }
        
    })
}



function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Initial display
showSlide(currentSlide);



// Automatically change slide every 5000 milliseconds (5 seconds)
setInterval(nextSlide, 5000);


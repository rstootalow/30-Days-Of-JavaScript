function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  sliderImages.forEach(sliderImage => {
    // half way through the image Scroll
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    console.log('****** SlideInAt variable ******');
    console.log(slideInAt);
    // bottom of image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    console.log('****** imageBottom variable ******');
    console.log(imageBottom);
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    console.log('****** isHalfShown variable ******');
    console.log(isHalfShown);
    const isNotScrolledPast = window.scrollY < imageBottom;
    console.log('****** isNotScrolledpast variable ******');
    console.log(isNotScrolledPast);
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));

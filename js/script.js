(
  function(){
    'use strict';
    let item = document.querySelectorAll('.timeline li');

    function isElementInViewport(el){
      var rect = el.getBoundingClientRect();
      return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunk(){
      for(let i=0; i< item.length; i++){
        if(isElementInViewport(item[i])){
          item[i].classList.add('in-view')
        }
      }
    }

    window.addEventListener('load', callbackFunk)
    window.addEventListener('resize', callbackFunk)
    window.addEventListener('scroll', callbackFunk)
  }
)()
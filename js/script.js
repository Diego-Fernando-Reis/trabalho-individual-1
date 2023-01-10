(
  function(){
    'use strict';
    let item = document.querySelectorAll('.timeline li');
    let frontenders = document.getElementById('frontenders')
    let decifrando = document.getElementById('decifrando')
    let rodrigues = document.getElementById('rodrigues')
    let prompt = document.getElementById('prompt')

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

    decifrando.addEventListener('click', ()=>{
      prompt.value = 'https://diego-fernando-reis.github.io/projetoindividual-decifrando';
      document.getElementById('one').style.display = 'none';
      document.getElementById('two').style.display = 'block';
      document.getElementById('three').style.display = 'none';
      document.getElementById('linha').style.display = 'none';
      document.getElementById('linha2').style.display = 'none';
      document.getElementById('decifrando').style.padding = '0 30px';
      document.getElementById('rodrigues').style.padding = '0 30px';
      frontenders.style.backgroundColor = 'rgb(36, 36, 36)';
      decifrando.style.backgroundColor = 'rgb(20, 20, 20)';
    })

    window.addEventListener('scroll', (e)=>{
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    }, false)
  }
)()
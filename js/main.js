'use strict';

{
  //reverse function
  let reverse = [
    [], [], [], [], [], [], [],
  ];

  for(let i = 0; i < 5; i++) {
    const divl = document.createElement('div');
    divl.style.display = 'flex';

    for(let j = 0; j < 10; j++) {
      const divc = document.createElement('div');
      divc.classList.add('card');
      divl.appendChild(divc);
      const wrap = document.getElementById('wrap');
      wrap.appendChild(divl);

      let sum = i + j;
      for(let k = 0; k < 7; k++) {
        if(sum === k * 2 + 1) {
          reverse[k].push(divc);
        }
      }
    }
  }

    var rotation = function(reverse) {
      for(let i = 0; i < reverse.length; i++) {
        setTimeout(function() {
          reverse[i].forEach(card => {
            card.classList.add('rotate');
            card.style.opacity = "1";
          });
        }, 300 * i);
      }
    }

    window.addEventListener('load', () => {
    rotation(reverse);
  });
  
}
var toggleState = function (elem, one, two) {
   elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};

(function() {
   // select all buttons that should change the element state
   var buttons = document.querySelectorAll('[data-popup]');

   // spread the object into array and iterate
   [].slice.call(buttons).forEach(function(btn) {
      // select the element id which state should be changed by clicking the button
      var popup = document.querySelector(`#${btn.dataset.popup}`)
      btn.addEventListener('click',
         toggleState.bind(null, popup, 'closed', 'open'), false
      );
   })

   setTimeout(function() {
      toggleState(modal, 'closed', 'open');
   }, 3000)
   
}());
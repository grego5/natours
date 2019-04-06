var toggleState = function (elem, one, two) {
   elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};

(function() {
   var btn = document.querySelector('.navigation__toggle');
   var nav = document.querySelector('.navigation');
   
   btn.addEventListener('click',
      toggleState.bind(null, nav, 'closed', 'open'), false
   );
}());
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  let navlinks = document.querySelectorAll('a.nav-link')

  const bsCollapse = new bootstrap.Collapse(document.getElementById('sidebarMenu'), {toggle: false});

  Array.prototype.slice.call(navlinks)
    .forEach(function (navlink) {
      navlink.addEventListener('click', function() {
        if(window.matchMedia("(max-width: 768px)").matches) {
          bsCollapse.toggle()
        }
      }, false)
    })

  let accordions = document.querySelectorAll('div.accordion-collapse');

  Array.prototype.slice.call(accordions)
    .forEach(function (accordion) {
      accordion.addEventListener('hidden.bs.collapse', function ({
        jQuery(window).trigger('resize').trigger('scroll');
      }));
      accordion.addEventListener('shown.bs.collapse', function ({
        jQuery(window).trigger('resize').trigger('scroll');
      }));
    });
    
})()
/* The Bank of Arts — staging interactions: scroll reveal + mobile menu */
(function(){
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(ents){
      ents.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
    },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(e,i){e.style.transitionDelay=Math.min(i%6*60,300)+'ms';io.observe(e);});
  } else { els.forEach(function(e){e.classList.add('in');}); }
  var b=document.querySelector('.burger'), m=document.querySelector('.menu');
  if(b&&m){b.addEventListener('click',function(){m.classList.toggle('open');});}
  var form=document.getElementById('contactForm');
  if(form){form.addEventListener('submit',function(e){
    e.preventDefault();
    var g=function(id){var el=document.getElementById(id);return el?el.value:'';};
    var subject='Website inquiry from '+g('name');
    var body='Name: '+g('name')+'\r\nEmail: '+g('email')+'\r\nType: '+g('type')+'\r\n\r\n'+g('msg');
    window.location.href='mailto:advisory@thebankofarts.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  });}
})();

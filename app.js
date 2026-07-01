/* The Bank of Arts - staging interactions: scroll reveal + mobile menu */
(function(){
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    document.documentElement.classList.add('reveal-armed');
    var showAll=function(){els.forEach(function(e){e.classList.add('in');});};
    var io=new IntersectionObserver(function(ents){
      ents.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
    },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(e,i){e.style.transitionDelay=Math.min(i%6*60,300)+'ms';io.observe(e);});
    document.querySelectorAll('.hero-full .reveal').forEach(function(e){e.classList.add('in');});
    setTimeout(showAll,1400);
  } else { els.forEach(function(e){e.classList.add('in');}); }

  var b=document.querySelector('.burger'), m=document.querySelector('.menu');
  if(b&&m){
    var setMenu=function(open){
      m.classList.toggle('open',open);
      b.setAttribute('aria-expanded',open?'true':'false');
      b.setAttribute('aria-label',open?'Close menu':'Open menu');
    };
    b.addEventListener('click',function(e){e.stopPropagation();setMenu(!m.classList.contains('open'));});
    m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setMenu(false);});});
    document.addEventListener('click',function(e){if(m.classList.contains('open')&&!m.contains(e.target)&&e.target!==b){setMenu(false);}});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&m.classList.contains('open')){setMenu(false);b.focus();}});
  }

  var form=document.getElementById('contactForm');
  if(form){form.addEventListener('submit',function(e){
    e.preventDefault();
    var g=function(id){var el=document.getElementById(id);return el?el.value:'';};
    var subject='Website inquiry from '+g('name');
    var body='Name: '+g('name')+'\r\nEmail: '+g('email')+'\r\nType: '+g('type')+'\r\n\r\n'+g('msg');
    window.location.href='mailto:partners@tboarts.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  });}
})();

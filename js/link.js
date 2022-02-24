document.addEventListener('DOMContentLoaded',()=>{

   var url_atual = window.location.href;
   console.log(url_atual);

   function check_mobile() { 
      if( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
      ){
         return true;
      } else {
         return false;
      }
   }
  
   if(check_mobile()){
      if(window.location.pathname == '/AW-Freela/quemsomos' || window.location.pathname == '/AW-Freela/quemsomos.html'){
         let $link = document.querySelector('footer .container .wraper-btn a');
         $link.setAttribute("href", "https://wa.me/message/IB2XL3E7JO66I1");
      }else if(window.location.pathname == '/AW-Freela/' || window.location.pathname == 'AW-Freela/index.html'){
         let $link = document.querySelector('section.home .container div button a');
         $link.setAttribute("href", "https://wa.me/message/IB2XL3E7JO66I1");
      }
   }
});

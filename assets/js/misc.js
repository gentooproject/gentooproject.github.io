
if( navigator.userAgent.match(/X11/i)
  ){
    var langbis = navigator.language
              var lang = langbis.split('-')[0] || [] ;
              var re = new RegExp("[en,es,pt,fr]");
              if (re.test(lang)) {
              } else {
              var lang = "en" ;
              }

      $('#linux').load('https://rpm.li/assets/linux-blog.html #' + lang, function() {
      fnShowLoading(false);
  });
  $('#linux1').load('https://rpm.li/assets/linux-blog.html #' + lang, function() {
      fnShowLoading(false);
  });
  $('#linux2').load('https://rpm.li/assets/linux-blog.html #' + lang, function() {
      fnShowLoading(false);
  });
  $('#linux3').load('https://rpm.li/assets/linux-blog.html #' + lang, function() {
      fnShowLoading(false);
  });
}
           


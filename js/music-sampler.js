$(document).ready(function() {

  function hideText () {
    $('#handsuptext').hide();
    $('#dontlietext').hide();
    $('#feelingtext').hide();
    $('#justtext').hide();
  }

  function hideAudio() {
    $('#handsup').hide();
    $('#dontlie').hide();
    $('#igottafeeling').hide();
    $('#justcantgetenough').hide();
  }

  hideAudio();
  hideText();
  $('#flavor').slideToggle();

  $('.album').click (function(){
    hideAudio();
    hideText();
    $("audio").each(function() {
        this.pause();
        this.currentTime = 0;
    });


      switch ($(this).attr("id")) {
        case "elephunk":
          hideText();
          $('#handsup').show();
          $('#handsuptext').show();
          break;
        case "monkey":
          hideText();
          $('#dontlie').show();
          $('#dontlietext').show();
          break;
        case "end":
          hideText();
          $('#igottafeeling').show();
          $('#feelingtext').show();
          break;
        case "beginning":
          hideText();
          $('#justcantgetenough').show();
          $('#justtext').show();
          break;
        case "big":
          $('#flavor').slideToggle();
          break;
        }

  });


});

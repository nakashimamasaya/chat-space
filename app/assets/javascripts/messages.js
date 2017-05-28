$(function() {
  function buildHTML(message) {
    var imageHTML = "";
    if (message.image) {
       imageHTML = `<img src= ${ message.image } alt= ${ message.image }>`;
     };
    var html = `<div class="messages__name" id="li">
                  ${ message.name }
                </div>
                <div class="messages__date" id="li">
                  ${ message.date }
                </div>
                ${ imageHTML }
                <div class="messages__text" id="li">
                  ${ message.body }
                </div>`;
    return html;
  }

  function buildFlashNotice(message){
    var flash = `<p class="flash-message-notice">
                  ${message.flash}
                 </p>`;
    return flash;
  }

  function buildFlashAlert(alert){
    var flash = `<p class="flash-message-alert">
                  ${alert}
                 </p>`;
    return flash;
  }

  $('.js-form').on('submit', function(e) {
    e.preventDefault();
    var flashMessage = [$('.flash-message-notice'),$('.flash-message-alert')];
    for(var i = 0; i < 2; i++)
      if (flashMessage[i] != undefined)
        flashMessage[i].remove()
    var message = new FormData($('.js-form')[0]);
    $.ajax({
      type: 'POST',
      url: './messages',
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.messages__list').append(html);
      var flash = buildFlashNotice(data);
      $('body').prepend(flash);
      $('.js-form')[0].reset();
    })
    .fail(function() {
      var alert = "メッセージを入力してください。";
      var flash = buildFlashAlert(alert);
      $('body').prepend(flash);
    });
    return false;
  });
});

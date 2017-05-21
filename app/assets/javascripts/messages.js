$(function() {
  function buildHTML(message) {
    var html = `<div class="messages__name" id="li">
                  ${ message.name }
                </div>
                <div class="messages__date" id="li">
                  ${ message.date }
                </div>
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
    var textField = $('.post-space__text');
    var message = textField.val();
    $.ajax({
      type: 'POST',
      url: './messages',
      data: {
        message:{
          body: message
        }
      },
      dataType: 'json'
    })
    .done(function(message) {
      var html = buildHTML(message);
      $('.messages__list').append(html);
      var flash = buildFlashNotice(message);
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

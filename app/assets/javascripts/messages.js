$(function(){
  function buildHTML(message){
    Message = message.text ? message.text : ('');
    Image = message.image.url? message.image.url : ('');

    var messageContainer = `<div class="message">
                          <div class="upper-info">
                            <div class= "upper-info__user">
                              <p>${ message.user_name }</p>
                            </div>
                            <div class="upper-info__date"> 
                              <p>${message.date}</p>
                            </div>
                          </div>
                          <div class="lower-message">
                            <div class="lower-message__text">
                                <p>${Message}</p>
                                <img src="${Image}", class="lower-message__image">
                            </div>
                          </div>
                        </div>`;
    return messageContainer;

  }
  $("#info").on('submit', function(e){
    e.preventDefault();
    var userInput = new FormData(this);
    var href = window.location.href
    $.ajax({
      url: href,
      type: "POST",
      data: userInput,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main').append(html)
      $('#info')[0].reset();
      $('.chat-main').animate({scrollTop: $('.chat-main')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('メッセージを入力してください。');
    })
  });
});
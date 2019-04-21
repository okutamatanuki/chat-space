$(function(){
  function buildHTML(data){
    var messageContainer = `<div class="message">
                          <div class="upper-info">
                            <div class= "upper-info__user">
                              <p>${ data.user_name }</p>
                            </div>
                            <div class="upper-info__date"> 
                              <p>${data.date}</p>
                            </div>
                          </div>
                          <div class="lower-message">
                            <div class="lower-message__text">
                                <p>${data.text}
                                <img src="${data.image.url}", class="lower-message__image">
                                </p>
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
      $('.input-box__text').val('')
    })
    .fail(function(){
      alert('メッセージを入力してください。');
    })
  });
});
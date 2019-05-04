$(function(){
  $('.chat-main').scrollTop($('.chat-main')[0].scrollHeight);
  function buildHTML(message){
    var Message = message.text ? message.text : ('');
    var Image = message.image.url ? message.image.url : ('');
    var messageContainer = `<div class="message messages" data-id="${message.id}">
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
    var href = `groups/${group.id}/messages`
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
}); //メッセージの非同期通信end


$(function(){

  var buildAutoUpdateMessage = function(message){
    var messageText = message.text ? message.text : ('');
    var messageImage = message.image.url ? message.image.url : ('');
    var html = `<div class="message messages" data-id="${message.id}">
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
                              <p>${messageText}</p>
                              <img src="${messageImage}", class="lower-message__image">
                          </div>
                        </div>
                      </div>`;
    return html;
    }; 


  
  setInterval(update,5000);    


  function update(){    
    var last_message_id = $('.messages:last').data('id');
    var href = 'api/messages'

    $.ajax({
    url: href,
    type: 'GET',
    data:{id: last_message_id},
    dataType: 'json'
    })//ajax条件の定義 end

    .done(function(messages){
      messages.forEach(function(message){
        var insertHTML = buildAutoUpdateMessage(message)
        $('.chat-main').append(insertHTML)
      }); // each の処理 end
      
      $('.chat-main').animate({scrollTop: $('.chat-main')[0].scrollHeight}, 'fast');//画面をスクロールさせる処理 end
    }) //.done end

    .fail(function(){
      alert('error');
    }); // fail end
      
  }; //update関数end
}); //自動更新機能end

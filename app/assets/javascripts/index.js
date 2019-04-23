$(function(){
  var search_list = $("#user-search-result");

  function appendUser(user) {
    var html = `<div class='chat-group-user clearfix'>
                      <p class='chat-group-user__name'>
                        ${user.name}
                      </p>
                      <a class='user-search-add chat-group-user__btn chat-group-user__btn--add'>
                        追加
                      </a>
                    </div>`;
    search_list.append(html);
}

  //エラーの時の処理（msgの中身は下で定義）
  function appendErrMsg(msg) {
    var html = `<li>
                  <div class='listview__element--right-icon'>${ msg }</div>
                </li>`
    search_list.append(html);
  }

  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();
    var href = window.location.href

    $.ajax({
      type: 'GET',
      url: href,
      data: {name: input},
      dataType: 'json'
    })

    .done(function(inputs){
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else{
        var msg = "一致するユーザーはいません";
        appendErrMsg(msg);
      }
    })
    .fail(function(){
      debugger;
      alert('ユーザーの検索に失敗しました');
    })
  });
});
json.text  @message.text
json.id  @message.id
json.user_name  @message.user.name
json.date @message.created_at.strftime("%Y/%m/%d %H:%M")
json.image @message.image
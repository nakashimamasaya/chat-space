json.name @message.user.name
json.date message_date(@message)
json.body @message.body
json.flash flash.now[:notice]

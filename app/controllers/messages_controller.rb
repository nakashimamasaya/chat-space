class MessagesController < ApplicationController
  def index
    @group = Group.find(params[:group_id])
    @groups = current_user.groups
    @message = Message.new
    @messages = @group.messages
    @group_members = @group.users
  end

  def create
    message = Message.new(message_params)
    if message.save
    else
    end
    redirect_to group_messages_path(params[:group_id])
  end

  private

  def message_params
    params.require(:message).permit(:body).merge(group_id: params[:group_id],user_id: current_user.id)
  end
end

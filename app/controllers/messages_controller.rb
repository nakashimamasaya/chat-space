class MessagesController < ApplicationController

  before_action :set_variable, only: [:index, :create]

  def index
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      flash.now[:notice] = "メッセージ送信成功"
      respond_to do |format|
        format.html { redirect_to group_messages_path(@message.group_id), notice:  "メッセージ送信成功"}
        format.json
      end
    else
      flash.now[:alert] = "メッセージを入力してください"
      render :index
    end
  end

  private

  def message_params
    params.require(:message).permit(:body).merge(group_id: params[:group_id],user_id: current_user.id)
  end

  def set_variable
    @group = Group.find(params[:group_id])
    @groups = current_user.groups
    @messages = @group.messages
    @group_members = @group.users
  end

end

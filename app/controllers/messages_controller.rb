class MessagesController < ApplicationController
  def index
    @messages = ""
    @groups = current_user.groups
  end
end

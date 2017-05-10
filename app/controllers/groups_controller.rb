class GroupsController < ApplicationController

  before_action :set_users, only: [:new, :edit]
  before_action :set_current_group, only: [:edit, :update]

  def index
    @groups = current_user.groups
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice:  "グループ作成成功"
    else
      flash.now[:alert] = "グループ作成失敗"
      render action: :new
    end
  end

  def edit
    @group_users = @group.users
  end

  def update
    if @group.update(group_params)
      redirect_to root_path, notice: "グループ更新成功"
    else
      flash.now[:alert] = "グループ更新失敗"
      render action: :edit
    end
  end

  private

  def group_params
    params.require(:group).permit(:name,user_ids:[])
  end

  def set_users
    @users = User.all
  end

  def set_current_group
    @group = Group.find(params[:id])
  end

end

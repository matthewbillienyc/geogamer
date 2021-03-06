class Api::V1::UsersController < ApplicationController
  respond_to :json

  def index
    respond_with User.all
  end

  def show
    respond_with User.find(params[:id])
  end

#   def new
#     @user = User.new
#   end

#   def create
#     @user = User.new(user_params)
#     if @user.save
#       session[:user_id] = @user.id
#       redirect_to @user
#     else
#       render :new
#     end
#   end

#   def show
#     @user = current_user
#     @userviewobject = UserViewObject.new(@user)
#     @game = Game.new
#   end

#   def destroy
#     @user = User.find(params[:id])
#     @user.destroy
#     flash[:danger] = "User has been deleted"
#     redirect_to @user
#   end

# private
#   def user_params
#     params.require(:user).permit(:name, :email, :password, :password_confirmation)
#   end

#   def require_admin
#     if logged_in? && !current_user.admin?
#       flash[:danger] = "Only admin users can perform that action"
#       redirect_to root_path
#     end
#   end

end
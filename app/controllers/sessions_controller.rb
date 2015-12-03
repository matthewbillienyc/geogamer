class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(name: params[:session][:name])
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      redirect_to root_url, :notice => "Welcome #{user.name}!"
      else
        flash.now.alert = "Invalid email or password"
        render "new"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end

end

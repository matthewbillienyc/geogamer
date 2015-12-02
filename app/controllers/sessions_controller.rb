class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(name: params[:session][:name])
    if user && user.authenticate(params[:session][:password])
      redirect_to root_url, :notice => "Welcome #{user.name}!"
      else
        flash.now.alert = "Invalid email or password"
        render "new"
    end
  end

end

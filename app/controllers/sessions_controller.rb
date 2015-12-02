class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(name: params[:session][:name])
    if user && user.authenticate(params[:session][:password])
      redirect_to root_url
      # else
      # flash[:danger] = 'Invalid email/password combination' # Not quite right!
      # render 'new'
    end
  end

end

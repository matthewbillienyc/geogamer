class AdminsController < ApplicationController
  def authorized?
    unless current_user.admin
      flash[:error] = "You are not authorized to view that page."
      redirect_to root_path
    end
  end

  def chart_info
    @usergames = User.num_games_for_each_user
    binding.pry
    render json: @usergames
  end

end

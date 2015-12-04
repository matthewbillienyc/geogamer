class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def index
    render 'layouts/index'
  end

  private

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def logged_in?
    !!current_user
  end

  def current_game
    # keeps track of game so locations can be given that games id
  end

  def visited_locations
    # makes sure the same country name isnt chosen twice in one game
  end

  def already_visited?
    # validation test visitied_locations.include?(country_name)
  end

  def current_score
    # keeps track of current score for one game
  end

end

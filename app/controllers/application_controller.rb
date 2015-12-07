class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :current_score, :current_game

  def index

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
    @current_game = Game.find_by(id: session[:game_id])
  end

  def visited_locations
    @visited_locations ||= []
  end

  def already_visited?(location)
    visited_locations.include?(location)
  end

  def current_score
    session[:score] ||= 0
  end

end

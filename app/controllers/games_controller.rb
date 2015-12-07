class GamesController < ApplicationController

	def create
		@game = Game.create
		@game.user = current_user
		@game.save
    session[:game_id] = @game.id
		redirect_to startlocation_path
		# redirect_to :controller => 'locations', :action => 'create'
	end

end

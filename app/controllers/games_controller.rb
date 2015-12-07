class GamesController < ApplicationController

	def create
		@game = Game.create
		@game.user = current_user
		@game.save
		session[:game] = @game
		binding.pry
		redirect_to startlocation_path
		# redirect_to :controller => 'locations', :action => 'create'
	end

end

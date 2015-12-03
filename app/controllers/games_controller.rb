class GamesController < ApplicationController

	def create
		@game = Game.create
		@game.user = current_user
		@game.save
		@location = Location.first
		redirect_to @location
	end

end

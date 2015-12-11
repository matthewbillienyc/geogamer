class LocationsController < ApplicationController
	helper_method :current_game

	def show
		@location = Location.find(params[:id])
		@location.set_clues_to_unused
		@clue = Clue.new()
		GameLocation.find_or_create_by({game_id: current_game.id, location_id: @location.id})
		current_game.last_location_id = @location.id
		current_game.save
		if current_game.completed?
			redirect_to won_path
		end
	end

	def continue
		@game = Game.find(current_user.games.last.id)
		session[:game_id] = @game.id
		@location = Location.find(@game.last_location_id)
		@clues = @game.clues.select { |clue| clue.location_id == @location.id }
		@clue = Clue.new()
		render 'locations/show'
	end

	def score
		if params["score"].to_i >= 0
			current_game.score += params["score"].to_i
		end
		current_game.save
		redirect_to startlocation_path
	end

	def create
		@location = CreateLocation.new(current_game).call
		redirect_to @location
	end

end

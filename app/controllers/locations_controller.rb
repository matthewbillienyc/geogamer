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
	end

	def create
		name = current_game.pick_new_location_name
		if Location.find_by(name: name)
			@location = Location.find_by(name: name)
			redirect_to @location
		else
			@location = Location.new(name: name)
			@location.scrape_data
			@location.get_img_url
			@location.save
			@location.build_clues
			redirect_to @location
		end
	end

end

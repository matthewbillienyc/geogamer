class LocationsController < ApplicationController
	helper_method :current_game

	def show
		if current_game.completed?
			redirect_to won_path
		end
		@location = Location.find(params[:id])
		@location.set_clues_to_unused
		@clue = Clue.new()
		current_game.locations.push(@location)
		current_game.last_location_id = @location.id
		binding.pry
	end

	def score
		current_game.score += params["score"].to_i
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

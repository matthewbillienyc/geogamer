class LocationsController < ApplicationController
	helper_method :current_game

	def show
		if current_game.completed?
			redirect_to won_path
		end
		@location = Location.find(params[:id])
		@location.set_clues_to_unused
		@clue = Clue.new()
		GameLocation.create({location_id: @location.id, game_id: current_game.id})
	end

	def score
		current_game.score += params["score"].to_i
		current_game.save
	end



	def create
		name = Country.choose_random_country
		while current_game.visited_locations.include?(name)
			name = Country.choose_random_country
		end
		if Location.find_by(name: name)
			@location = Location.find_by(name: name)
			redirect_to @location
		else
			@location = Location.new(name: name)
			@location.scrape_data
			url_fetcher = Adapters::FlickrConnection.new
			@location.img_url = url_fetcher.get_photo_url(name)
			@location.save
			@location.build_clues
			redirect_to @location
		end
	end

end

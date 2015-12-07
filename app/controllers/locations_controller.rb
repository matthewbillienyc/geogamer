class LocationsController < ApplicationController
	helper_method :current_game

	def show
		@location = Location.find(params[:id])
		visited_locations.push(@location.name)
		@location.set_clues_to_unused
		@clue = Clue.new()
	end

	def score

	end



	def create
		binding.pry	
		name = Country.choose_random_country
		while already_visited?(name)
			name = Country.choose_random_country
		end
		if Location.find_by(name: name)
			@location = Location.find_by(name: name)
			redirect_to @location
		else
			@location = Location.new(name: name)
			@location.scrape_data
			@location.save
			@location.build_clues
			redirect_to @location
			# @location.scrape_data
			# @location.get_img_url
			# @location.build_clues
			# @location.save
			# redirect_to show
		end
			end

end

class LocationsController < ApplicationController

	def show
		@location = Location.find(params[:id])
		@location.set_clues_to_unused
		@clue = Clue.new()
	end

	def score
		binding.pry
		@location = Location.find(params["location_id"])
		# current_score += params[score] or some shit
	end

	def create
		binding.pry
	end

end

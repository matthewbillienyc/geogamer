class LocationsController < ApplicationController

	def show
		@location = Location.find(params[:id])
		@location.set_clues_to_unused
		@clue = Clue.new()
	end

	def score
		@location = Location.find(params["location_id"])

	end

end

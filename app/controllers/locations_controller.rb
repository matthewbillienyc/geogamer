class LocationsController < ApplicationController

	def show
		@location = Location.find(params[:id])
		@clue = Clue.new()
	end

	def score
		@location = Location.find(params["location_id"])

	end

end

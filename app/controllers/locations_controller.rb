class LocationsController < ApplicationController

	def show
		@location = Location.find(params[:id])
		@clue = Clue.new()
	end

end

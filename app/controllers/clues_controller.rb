class CluesController < ApplicationController

  def create
    location = Location.find(params["clue"]["location_id"])
    @clue = CreateClue.new(location, current_game).call
		render :partial => "clues/clue", locals: {:clue => @clue}
  end

end

class CluesController < ApplicationController

  def create
    @clue = Clue.unused_clues(params["clue"]["location_id"]).sample
    @clue.status = "used"
    @clue.save
    render :partial => "clues/clue", locals: {:clue => @clue}
  end

end
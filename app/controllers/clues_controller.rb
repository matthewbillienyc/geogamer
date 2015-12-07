class CluesController < ApplicationController

  def create
    @clue = Clue.unused_clues(params["clue"]["location_id"]).sample
    @clue.status = "used"
    @clue.save
    GameClue.create({game_id: current_game.id, clue_id: @clue.id})
    render :partial => "clues/clue", locals: {:clue => @clue}
  end

end

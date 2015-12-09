class CluesController < ApplicationController

  def create
    location = Location.find(params["clue"]["location_id"])
	    if (0..1).include?(location.used_clues_count)
	    	@clue = Clue.random_hard_clue(location.id)
		    @clue.status = "used"
		    @clue.save
		    current_game.clues.push(@clue)
		    render :partial => "clues/clue", locals: {:clue => @clue}
	    elsif (2..3).include?(location.used_clues_count)
	    	@clue = Clue.random_medium_clue(location.id)
	    	@clue.status = "used"
		    @clue.save
		    current_game.clues.push(@clue)
		    render :partial => "clues/clue", locals: {:clue => @clue}
	    elsif (4..5).include?(location.used_clues_count)
	    	@clue = Clue.random_easy_clue(location.id)
	    	@clue.status = "used"
		    @clue.save
		    current_game.clues.push(@clue)
		    render :partial => "clues/clue", locals: {:clue => @clue}
		  else
		  	render :partial => "clues/usedup"
	    end
  end

end

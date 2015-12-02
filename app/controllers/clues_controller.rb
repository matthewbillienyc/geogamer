class CluesController < ApplicationController

  def create
    @clue = Clue.find_by(location_id: params['clue']['location_id'])
  end

end

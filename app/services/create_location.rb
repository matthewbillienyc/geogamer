class CreateLocation

  attr_reader :game, :name

  def initialize(game)
    @game = game
  end

  def call
    @name = game.pick_new_location_name
    if Location.find_by(name: name)
      Location.find_by(name: name)
    else
      new_location
    end
  end

  private

  def new_location
    location = Location.new(name: name)
    location.scrape_data
    location.get_img_url
    location.save
    location.build_clues
    location
  end
end

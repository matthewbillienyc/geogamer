class CreateClue

  attr_reader :location, :current_game

  def initialize(location, current_game)
    @location = location
    @current_game = current_game
  end

  def run
    if (0..1).include?(location.used_clues_count)
      hard_clues
    elsif (2..3).include?(location.used_clues_count)
      medium_clues
    elsif (4..5).include?(location.used_clues_count)
      easy_clues
    end
  end

  def hard_clues
    @clue = Clue.random_hard_clue(location.id)
    set_clue_status_and_link_to_game(@clue)
    @clue
  end

  def medium_clues
    @clue = Clue.random_medium_clue(location.id)
    set_clue_status_and_link_to_game(@clue)
    @clue
  end

  def easy_clues
    @clue = Clue.random_easy_clue(location.id)
    set_clue_status_and_link_to_game(@clue)
    @clue
  end

  def set_clue_status_and_link_to_game(clue)
    clue.status = "used"
    clue.save
    current_game.clues.push(clue)
  end
end

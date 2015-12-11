class CreateClue

  attr_reader :location, :game

  def initialize(location, game)
    @location = location
    @game = game
  end

  def call
    case location.used_clues_count
    when 0, 1
       if get_clue("hard")
         clue = get_clue("hard")
         change_status(clue)
         clue
       else
         clue = get_clue_for_other_difficulties("easy", "medium")
         change_status(clue)
         clue
       end
    when 2, 3
      if get_clue("medium")
        clue = get_clue("medium")
        change_status(clue)
        clue
      else
        clue = get_clue_for_other_difficulties("easy", "hard")
        change_status(clue)
        clue
      end
    when 4, 5
      if get_clue("easy")
        clue = get_clue("easy")
        change_status(clue)
        clue
      else
        clue = get_clue_for_other_difficulties("hard", "medium")
        change_status(clue)
        clue
      end
    end
  end

  private

  def get_clue(difficulty)
    Clue.random_clue(difficulty, location.id)
  end

  def get_clue_for_other_difficulties(difficulty_one, difficulty_two)
    Clue.random_clue_two_difficulties(difficulty_one, difficulty_two, location.id)
  end

  def change_status(clue)
    clue.status = "used"
    clue.save
    game.clues.push(clue)
  end
  
end

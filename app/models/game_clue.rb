class GameClue < ActiveRecord::Base
  belongs_to :game
  belongs_to :clue
end

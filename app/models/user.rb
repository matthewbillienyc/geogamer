
class User < ActiveRecord::Base
  has_secure_password
  has_many :games
  has_many :clues
  validates_presence_of :name, :password_confirmation
  validates :email, uniqueness: :true

  def total_number_games
    Game.where(user_id: self.id).length
  end

  def total_locations_visited
    games.map { |game|
      game.locations.length
    }.inject(:+)
  end

  def total_clues_used
    games.map { |game|
      game.clues.length
    }.inject(:+)
  end

  def clues_used_for_location(location, game)
    game.clues.where(location_id: location.id).length
  end

end

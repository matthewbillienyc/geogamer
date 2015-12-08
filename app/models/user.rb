
class User < ActiveRecord::Base
  has_secure_password
  has_many :games
  validates_presence_of :name, :password_confirmation
  validates :email, uniqueness: :true

  def capitalize_name
      name = (name.split(" ").map do |name|      
        name.capitalize
      end.join(" "))
  end

  def total_games
    self.games.count
  end

  def total_locations_visited
      
  end

  end

  def average_clues_per_game
    total_clues = 0

    self.games.each do |game|
      game.locations.each do |location|
        total_clues += location.clues.count
      end
    end
    if self.total_locations_visited != 0
      total_clues / self.total_locations_visited
    else
      'No data'
    end
  end
end

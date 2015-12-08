
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
    if locations?
      games.map { |game|
        game.locations.length
      }.inject(:+)
    end
  end

  def total_clues_used
    if clues?
      games.map { |game|
        game.clues.length
      }.inject(:+)
    end
  end

  def clues_used_for_location(location, game)
    game.clues.where(location_id: location.id).length
  end

  def average_clues_per_game
    if clues?
      (games.map { |game|
        game.clues.length
      }.inject(:+))/games.length
    end
  end

  def average_clues_per_location_across_all_games
    if clues? && locations?
      total_clues_used / total_locations_visited
    end
  end

  def average_clues_per_location_each_game(game)
    game.clues.length / game.locations.length
  end

  def capitalize_name
    cap_name = (name.split(" ").map do |name|
      name.capitalize
    end.join(" "))
    return cap_name
  end

  def games?
    games.any?
  end

  def clues?
    if games?
      games.each do |game|
        if game.clues
          return true
        end
      end
    else
      false
    end
  end

  def locations?
    if games?
      games.each do |game|
        if game.locations
          return true
        end
      end
    else
      false
    end
  end

end

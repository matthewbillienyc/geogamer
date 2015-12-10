
class User < ActiveRecord::Base
  has_secure_password
  has_many :games
  has_many :locations, through: :games
  has_many :clues, through: :games
  validates_presence_of :name, :password_confirmation
  validates :email, uniqueness: :true

  def total_number_games
    Game.where(user_id: self.id).length
  end

  def total_locations_visited
    locations.length
  end

  def total_clues_used
    clues.length
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
    clues.any?
  end

  def locations?
    locations.any?
  end

  def self.user_with_most_locations
    joins(:games, :locations).select("users.name, COUNT(locations) AS num_locations").group(:name).order("num_locations DESC").first
  end

  def self.num_games_for_each_user
    all.each_with_object({}) { |user, hash| hash[user.name]= user.total_number_games }

  end

end

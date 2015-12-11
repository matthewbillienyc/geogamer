class UserSerializer < ActiveModel::Serializer

  attributes :id, :email, :name

  has_many :games

  def attributes
    attributes = super
    attributes[:total_number_games] = User.find(attributes[:id]).total_number_games
    attributes[:total_locations_visited] = User.find(attributes[:id]).total_locations_visited
    attributes[:total_clues_used] = User.find(attributes[:id]).total_clues_used
    attributes
  end

end
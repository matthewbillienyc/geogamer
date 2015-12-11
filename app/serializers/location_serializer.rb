class LocationSerializer < ActiveModel::Serializer

  attributes :id, :name, :img_url

  has_many :clues

end

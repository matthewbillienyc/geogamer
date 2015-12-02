# == Schema Information
#
# Table name: challenges
#
#  id          :integer          not null, primary key
#  location_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Challenge < ActiveRecord::Base
  belongs_to :location
  has_many :clues, through: :location

end

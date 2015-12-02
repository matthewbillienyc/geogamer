# == Schema Information
#
# Table name: game_locations
#
#  id          :integer          not null, primary key
#  game_id     :integer
#  location_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class GameLocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

# == Schema Information
#
# Table name: clues
#
#  id          :integer          not null, primary key
#  hint_string :string
#  datatype    :string
#  location_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ClueTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

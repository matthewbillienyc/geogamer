# == Schema Information
#
# Table name: clues
#
#  id          :integer          not null, primary key
#  location_id :integer
#  datatype_id :integer
#  data        :string
#

class Clue < ActiveRecord::Base
  belongs_to :location
  belongs_to :datatype
end

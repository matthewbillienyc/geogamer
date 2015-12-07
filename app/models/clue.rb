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

  def self.unused_clues(location_id)
    self.where('location_id = ? AND status = ?', location_id, "unused")
  end

end

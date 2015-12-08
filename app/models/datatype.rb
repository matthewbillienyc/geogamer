# == Schema Information
#
# Table name: datatypes
#
#  id      :integer          not null, primary key
#  type    :string
#  lead_in :string
#

class Datatype < ActiveRecord::Base
  has_many :clues
  validates_presence_of :dtype
  validates_uniqueness_of :dtype
end

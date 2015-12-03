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
end

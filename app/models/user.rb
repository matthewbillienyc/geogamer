
class User < ActiveRecord::Base
  has_secure_password
  has_many :games
  validates_presence_of :name, :password_confirmation
  validates :email, uniqueness: :true
end

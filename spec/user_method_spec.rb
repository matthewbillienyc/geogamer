require 'spec_helper'

context 'testing instance methods' do

  before(:all) do
    @user = User.create({name: "bob", email: "bob@bob.com", password: "password", password_confirmation: "password"})
    @game1 = Game.create(user_id: @user.id)
    @game2 = Game.create(user_id: @user.id)
  end

  describe '#total_number_games' do
    it 'should return total number of games played by user' do
      expect(@user.total_number_games).to eq(2)
    end
  end

  describe '#capitalize_name' do
    it 'should capitalize the users name' do
      expect(@user.capitalize_name).to eq("Bob")
    end
  end

  describe '#games?' do
    it 'should return true if user has played games' do
      expect(@user.games?).to eq(true)
    end
  end

  describe '#locations?' do
    it 'should return false if user hasnt visited locations' do
      expect(@user.locations?).to eq(false)
    end
  end

  describe '#clues?' do
    it 'should return false if no user has used no clues' do
      expect(@user.clues?).to eq(false)
    end
  end

end

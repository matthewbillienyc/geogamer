describe Clue, type: :model do

  describe 'clue validation' do
    it 'is invalid without data' do
      clue = Clue.new
      clue.data = nil
      expect(clue).to_not be_valid
    end
    it 'should be invalid without location id' do
      clue = Clue.new
      clue.location_id = nil
      expect(clue).to_not be_valid
    end
  end

end

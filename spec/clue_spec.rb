describe Clue, type: :model do

  describe 'clue validation' do
    it 'is invalid without data' do
      expect(Clue.new).to_not be_valid
    end
  end

end

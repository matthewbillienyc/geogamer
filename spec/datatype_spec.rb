describe Datatype, type: :model do
  describe 'datatype validation' do
    it 'should be invalid without dtype' do
      expect(Datatype.new).to_not be_valid
    end
    it 'should be invalid without unique dtype' do
      datatype1 = Datatype.new(dtype: "population")
      datatype1.save
      expect(Datatype.new(dtype: "population")).to_not be_valid
    end
  end
end

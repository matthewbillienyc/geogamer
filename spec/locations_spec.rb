
describe Location, type: :model do

	context "Location validations" do
		it "location is valid" do
			norway = Location.new(name: "Norway")
			expect(norway).to be_valid
		end
		it "location is invalid" do
			unnamed = Location.new()
			expect(unnamed).to_not be_valid
		end
		it "is invalid without unique name" do
			test_location = Location.new(name: "test")
			test_location.save
			test_2 = Location.new(name: "test")
			expect(test_2).to_not be_valid
		end
	end

end


describe Location, type: :model do

	context "Location validations" do
		it "location is valid" do
			expect(Location.new(name: "Norway")).to be_valid
		end
		it "location is invalid" do
			expect(Location.new()).to_not be_valid
		end
		it "is invalid without unique name" do
			test_location = Location.new(name: "test")
			expect(Location.new(name: "test")).to_not be_valid
		end
	end


	# context "Class methods" do
	# 	# let(:location) {Location.create(name: "test")}
	# 	# let(:clue) {Clue.create({location_id: location.id, status: "used"})}
	# 	describe "#set_clues_to_unused" do
	# 		it 'should reset clue status' do
	# 			location = Location.create(name: "test")
	# 			clue = Clue.create({location_id: location.id, status: "used"})

	# 			binding.pry

	# 			location.set_clues_to_unused
	# 			expect(clue.status).to eq("unused")
	# 		end
	# 	end
	# end

end



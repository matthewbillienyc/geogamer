module HomepageHelper

	def randomized_names
  	names_array = ["Matthew Main", "Yifan Chen", "May Lee", "Matthew Billie"].shuffle
  	"#{names_array[0]}, #{names_array[1]}, #{names_array[2]}, and #{names_array[3]}"
	end

end

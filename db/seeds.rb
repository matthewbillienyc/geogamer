# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

matt = User.create(name: 'matt', email: 'matt@matt.com', password: 'matt', password_confirmation: 'matt', admin: true)
User.create(name: 'may', email: 'may@may.com', password: 'may', password_confirmation: 'may')
User.create(name: 'matthew', email: 'matthew@matthew.com', password: 'matthew', password_confirmation: 'matthew')
User.create(name: 'yifan', email: 'yifan@yifan.com', password: 'yifan', password_confirmation: 'yifan')

Datatype.create(dtype: 'capital', lead_in: "The capital of this country is ", difficulty: "easy")
Datatype.create(dtype: 'language', lead_in: "The main language of this country is ", difficulty: "medium")
Datatype.create(dtype: 'currency', lead_in: "This country's currency is ", difficulty: "easy")
Datatype.create(dtype: 'population', lead_in: "This country has a population of ", difficulty: "medium")
Datatype.create(dtype: 'continent', lead_in: "This country is in ", difficulty: "hard")
Datatype.create(dtype: 'land area', lead_in: 'This country has a land area of ', difficulty: "hard")
Datatype.create(dtype: 'terrain', lead_in: "This country's terrain is: ", difficulty: "hard")
Datatype.create(dtype: 'climate', lead_in: "This country's climate is: ", difficulty: "hard")
Datatype.create(dtype: 'natural hazards', lead_in: "This country's natural hazards are ", difficulty: "hard")
Datatype.create(dtype: 'life expectancy', lead_in: "This country's life expectancy is ", difficulty: "hard")
Datatype.create(dtype: 'literacy rate', lead_in: 'This country has a literacy rate of ', difficulty: "hard")
Datatype.create(dtype: 'roadways', lead_in: "This country's roads measure ", difficulty: "hard")
Datatype.create(dtype: 'GDP', lead_in: 'The GDP of this country is ', difficulty: "medium")

matt_game = matt.games.create
norway = matt_game.locations.create(name: "Norway")
chile = matt_game.locations.create(name: "Chile")
argentina = matt_game.locations.create(name: "Argentina")
norway.scrape_data
norway.get_img_url
norway.save
norway.build_clues
chile.scrape_data
chile.get_img_url
chile.save
chile.build_clues
argentina.scrape_data
argentina.get_img_url
argentina.save
argentina.build_clues

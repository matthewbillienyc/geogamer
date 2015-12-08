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

Datatype.create(dtype: 'capital', lead_in: "The capital of this country is ")
Datatype.create(dtype: 'language', lead_in: "The main language of this country is ")
Datatype.create(dtype: 'currency', lead_in: "This country's currency is ")
Datatype.create(dtype: 'population', lead_in: "This country has a population of ")
Datatype.create(dtype: 'continent', lead_in: "This country is in ")
Datatype.create(dtype: 'land area', lead_in: 'This country has a land area of ')
Datatype.create(dtype: 'terrain', lead_in: "This country's terrain is: ")
Datatype.create(dtype: 'climate', lead_in: "This country's climate is: ")
Datatype.create(dtype: 'natural hazards', lead_in: "This country's natural hazards are ")
Datatype.create(dtype: 'life expectancy', lead_in: "This country's life expectancy is ")
Datatype.create(dtype: 'literacy rate', lead_in: 'This country has a literacy rate of ')
Datatype.create(dtype: 'roadways', lead_in: "This country's roads measure ")
Datatype.create(dtype: 'GDP', lead_in: 'The GDP of this country is ')

matt_game = matt.games.create
norway = matt_game.locations.create(name: "Norway")
chile = matt_game.locations.create(name: "Chile")
argentina = matt_game.locations.create(name: "Argentina")
norway.scrape_data
norway.img_url = "http://www.demilked.com/magazine/wp-content/uploads/2014/12/norway-landscape-photography-scandinavian-nature-4.jpg"
norway.save
norway.build_clues
chile.scrape_data
chile.img_url = "http://www.pageresource.com/wallpapers/wallpaper/chile-landscape-mac-apple-lago-pehoe.jpg"
chile.save
chile.build_clues
argentina.scrape_data
argentina.img_url = "http://hayo.co/vigor/wp-content/uploads/2014/10/PATAGONIA-coer.jpg"
argentina.save
argentina.build_clues

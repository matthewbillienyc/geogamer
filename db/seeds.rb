# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(name: 'matt', email: 'matt@matt.com', password: 'matt', password_confirmation: 'matt')

Datatype.create(dtype: 'capital', lead_in: "The capital of this country is ")
Datatype.create(dtype: 'language', lead_in: "The main language of this country is ")
Datatype.create(dtype: 'currency', lead_in: "This country's currency is ")
Datatype.create(dtype: 'population', lead_in: "This country has a population of ")
Datatype.create(dtype: 'continent', lead_in: "This country is in ")
Datatype.create(dtype: 'land area', lead_in: 'This country has a land area of ')
Datatype.create(dtype: 'terrain', lead_in: "This country's terrain is: ")
Datatype.create(dtype: 'climate', lead_in: "This country's climate is: ")
Datatype.create(dtype: 'neighbors', lead_in: 'This country is neighbors with: ')
Datatype.create(dtype: 'life expectancy', lead_in: "This country's life expectancy is ")
Datatype.create(dtype: 'literacy rate', lead_in: 'This country has a literacy rate of ')
Datatype.create(dtype: 'roadways', lead_in: "This country's roads measure ")
Datatype.create(dtype: 'GDP', lead_in: 'The GDP of this country is ')


Location.create(name: 'Norway', img_url: 'http://www.hdwallpaperup.com/wp-content/uploads/2014/12/artic-norway1.jpg')
Clue.create(location_id: 1, datatype_id: 4, data: '5.1 million')
Clue.create(location_id: 1, datatype_id: 13, data: '256.5 billion')
Clue.create(location_id: 1, datatype_id: 11, data: '100%')
Clue.create(location_id: 1, datatype_id: 2, data: 'Norwegian')
Clue.create(location_id: 1, datatype_id: 10, data: '77 years')

Location.create(name: 'Australia', img_url: 'http://chockstone.smugmug.com/photos/961141587_ooJpB-L.jpg')

Location.create(name: 'South Africa', img_url: 'http://media-cache-ec0.pinimg.com/originals/f7/5f/57/f75f5762cc27f764e2e49b26f29defe0.jpg ')

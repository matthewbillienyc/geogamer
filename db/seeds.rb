# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Datatype.create(dtype: 'motto', lead_in: "The motto of this country is: ")
Datatype.create(dtype: 'population', lead_in: "The population of this country is: ")
Datatype.create(dtype: 'constitution', lead_in: "This country's constitution was ratified in: ")




Location.create(name: 'Norway', img_url: 'http://www.hdwallpaperup.com/wp-content/uploads/2014/12/artic-norway1.jpg')
Clue.create(location_id: 1, datatype_id: 1, data: 'Unity and Faith until Dovre Falls')
Clue.create(location_id: 1, datatype_id: 2, data: '5.1 million')
Clue.create(location_id: 1, datatype_id: 3, data: '1814')

Location.create(name: 'Australia', img_url: 'http://chockstone.smugmug.com/photos/961141587_ooJpB-L.jpg')
Clue.create(location_id: 2, datatype_id: 1, data: 'Advance Australia')
Clue.create(location_id: 2, datatype_id: 2, data: '3 people')
Clue.create(location_id: 2, datatype_id: 3, data: '1234')

Location.create(name: 'South Africa', img_url: 'http://media-cache-ec0.pinimg.com/originals/f7/5f/57/f75f5762cc27f764e2e49b26f29defe0.jpg ')
Clue.create(location_id: 3, datatype_id: 1, data: 'South Africa or die')
Clue.create(location_id: 3, datatype_id: 2, data: '56.9 billion billion')
Clue.create(location_id: 3, datatype_id: 3, data: '2020')
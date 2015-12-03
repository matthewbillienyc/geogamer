# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Location.create(name: 'Norway', img_url: 'http://www.hdwallpaperup.com/wp-content/uploads/2014/12/artic-norway1.jpg')

Datatype.create(dtype: 'motto', lead_in: "The motto of this country is: ")
Datatype.create(dtype: 'population', lead_in: "The population of this country is: ")
Datatype.create(dtype: 'constitution', lead_in: "This country's constitution was ratified in: ")

Clue.create(location_id: 1, datatype_id: 1, data: 'Unity and Faith until Dovre Falls')
Clue.create(location_id: 1, datatype_id: 2, data: '5.1 million')
Clue.create(location_id: 1, datatype_id: 3, data: '1814')

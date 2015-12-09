Fabricator(:game) do
  country = Country.choose_random_country
  game.locations.create(country)
end
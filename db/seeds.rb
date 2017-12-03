require 'csv'

CSV.foreach('db/seeds/heros.csv') do |row|
  hero = Hero.find_or_initialize_by(name: row[0])

  hero.update_attributes(
    image_name: row[1]
  )
end

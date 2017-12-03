# frozen_string_literal: true

require 'csv'

# 英雄
CSV.foreach('db/seeds/heros.csv') do |row|
  hero = Hero.find_or_initialize_by(name: row[0])

  hero.update_attributes(
    image_name: row[1]
  )
end

# 英雄のヒーローアビリティ
CSV.foreach('db/seeds/hero_abilities.csv') do |row|
  hero = Hero.find_by(name: row[0])
  puts "ERROR: not found hero '#{row[0]}'" if hero.blank?

  hero.hero_abilities.create(
    intimacy_level_from: row[1],
    intimacy_level_to: row[2],
    stage: row[3]
  )
end

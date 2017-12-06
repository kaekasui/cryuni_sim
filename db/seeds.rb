# frozen_string_literal: true

require 'csv'

# 英雄
CSV.foreach('db/seeds/heros.csv') do |row|
  hero = Hero.find_or_initialize_by(name: row[0])

  hero.update_attributes(
    image_name: row[1],
    whole_image_name: row[2]
  )
end

# 英雄のヒーローアビリティ
CSV.foreach('db/seeds/hero_abilities.csv') do |row|
  hero = Hero.find_by(name: row[0])
  raise "ERROR: not found hero '#{row[0]}'" if hero.blank?

  abilities = hero.hero_abilities.find_or_initialize_by(stage: row[3])
  abilities.update_attributes(
    intimacy_level_from: row[1],
    intimacy_level_to: row[2]
  )
end

# アビリティ
CSV.foreach('db/seeds/abilities.csv') do |row|
  ability = Ability.find_or_initialize_by(name: row[0])
  ability.save
end

# ヒーローアビリティにあるアビリティ
AttachedAbility.destroy_all
CSV.foreach('db/seeds/attached_abilities.csv') do |row|

  hero = Hero.find_by(name: row[0])
  raise "ERROR: not found hero '#{row[0]}'" if hero.blank?

  hero_ability = hero.hero_abilities.find_by(stage: row[1])
  if hero_ability.blank?
    raise "ERROR: not found hero '#{row[0]}''s hero ability stage: #{row[1]}"
  end

  ability = Ability.find_by(name: row[2])
  raise "ERROR: not found ability '#{row[2]}'" if ability.blank?

  hero_ability.attached_abilities.create(
    ability: ability,
    score: row[3],
    unit: row[4]
  )
end

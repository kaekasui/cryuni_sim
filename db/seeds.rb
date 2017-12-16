# frozen_string_literal: true

require 'csv'

# 英雄
CSV.foreach('db/seeds/heros.csv') do |row|
  hero = Hero.find_or_initialize_by(name: row[1])

  hero.update_attributes(
    image_name: row[2],
    whole_image_name: row[3],
    locked: row[0]
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

# VIPアビリティ
CSV.foreach('db/seeds/vip_abilities.csv') do |row|
  ability = VipAbility.find_or_initialize_by(vip_level: row[0])
  ability.update_attributes(
    image_name: row[1]
  )
end

# ヒーローアビリティにあるアビリティ
AttachedHeroAbility.destroy_all
CSV.foreach('db/seeds/attached_hero_abilities.csv') do |row|
  hero = Hero.find_by(name: row[0])
  raise "ERROR: not found hero '#{row[0]}'" if hero.blank?

  hero_ability = hero.hero_abilities.find_by(stage: row[1])
  if hero_ability.blank?
    raise "ERROR: not found hero '#{row[0]}''s hero ability stage: #{row[1]}"
  end

  ability = Ability.find_by(name: row[2])
  raise "ERROR: not found ability '#{row[2]}'" if ability.blank?

  hero_ability.attached_hero_abilities.create(
    ability: ability,
    score: row[3],
    unit: row[4]
  )
end

# VIPアビリティにあるアビリティ
AttachedVipAbility.destroy_all
CSV.foreach('db/seeds/attached_vip_abilities.csv') do |row|
  vip_ability = VipAbility.find_by(vip_level: row[0])
  if vip_ability.blank?
    raise "ERROR: not found vip level '#{row[0]}'"
  end

  ability = Ability.find_by(name: row[1])
  raise "ERROR: not found ability '#{row[1]}'" if ability.blank?

  vip_ability.attached_vip_abilities.create(
    ability: ability,
    score: row[2],
    unit: row[3]
  )
end

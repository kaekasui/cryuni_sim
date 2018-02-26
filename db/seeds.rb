# frozen_string_literal: true

require 'csv'

def save_and_print(target, key_name)
  return unless target.changed?
  target_changes = target.changes
  target.save
  puts "-- #{target.class.name}: #{key_name}, #{target_changes}"
end

# 英雄
CSV.foreach('db/seeds/heros.csv') do |row|
  hero = Hero.find_or_initialize_by(name: row[1])
  hero.attributes = {
    position: $INPUT_LINE_NUMBER,
    image_name: row[2],
    whole_image_name: row[3],
    locked: row[0]
  }
  save_and_print(hero, hero.name)
end

# アビリティ
CSV.foreach('db/seeds/abilities.csv') do |row|
  ability = Ability.find_or_initialize_by(name: row[0])
  save_and_print(ability, ability.name)
end

# グレード
CSV.foreach('db/seeds/grades.csv') do |row|
  grade = Grade.find_or_initialize_by(name: row[0])
  grade.attributes = {
    level: row[1],
    image_name: row[2]
  }
  save_and_print(grade, grade.name)
end

# VIPアビリティ
CSV.foreach('db/seeds/vip_abilities.csv') do |row|
  vip_ability = VipAbility.find_or_initialize_by(vip_level: row[0])
  vip_ability.attributes = {
    image_name: row[1]
  }
  save_and_print(vip_ability, vip_ability.vip_level)
end

# 英雄のヒーローアビリティ
CSV.foreach('db/seeds/hero_abilities.csv') do |row|
  hero = Hero.find_by(name: row[0])
  raise "ERROR: not found hero '#{row[0]}'" if hero.blank?

  hero_ability = hero.hero_abilities.find_or_initialize_by(stage: row[3])
  hero_ability.attributes = {
    intimacy_level_from: row[1],
    intimacy_level_to: row[2]
  }
  save_and_print(hero_ability, hero.name)
end

# 英雄装備
CSV.foreach('db/seeds/equipages.csv') do |row|
  equipage = Equipage.find_or_initialize_by(name: row[0])
  equipage.attributes = {
    part: row[1],
    level: row[2],
    min_grade: row[3],
    max_grade: row[4],
    card_slot: row[5],
    image_name: row[6]
  }
  save_and_print(equipage, equipage.name)
end

# カード
CSV.foreach('db/seeds/cards.csv') do |row|
  card = Card.find_or_initialize_by(monster_name: row[0])
  card.attributes = {
    min_grade: row[1],
    max_grade: row[2],
    image_name: row[3]
  }
  save_and_print(card, card.monster_name)
end

# ヒーローアビリティにあるアビリティ
CSV.foreach('db/seeds/attached_hero_abilities.csv') do |row|
  hero = Hero.find_by(name: row[0])
  raise "ERROR: not found hero '#{row[0]}'" if hero.blank?

  hero_ability = hero.hero_abilities.find_by(stage: row[1])
  if hero_ability.blank?
    raise "ERROR: not found hero '#{row[0]}''s hero ability stage: #{row[1]}"
  end

  ability = Ability.find_by(name: row[2])
  raise "ERROR: not found ability '#{row[2]}'" if ability.blank?

  attached_ability = AttachedHeroAbility.find_or_initialize_by(
    hero_ability: hero_ability, ability: ability
  )
  attached_ability.attributes = {
    score: row[3],
    unit: row[4]
  }
  save_and_print(
    attached_ability,
    "#{hero.name}, \
    #{hero_ability.intimacy_level_from}-#{hero_ability.intimacy_level_to}, \
    #{ability.name}"
  )
end

# VIPアビリティにあるアビリティ
CSV.foreach('db/seeds/attached_vip_abilities.csv') do |row|
  vip_ability = VipAbility.find_by(vip_level: row[0])
  raise "ERROR: not found vip level '#{row[0]}'" if vip_ability.blank?

  ability = Ability.find_by(name: row[1])
  raise "ERROR: not found ability '#{row[1]}'" if ability.blank?

  attached_ability = AttachedVipAbility.find_or_initialize_by(
    vip_ability: vip_ability, ability: ability
  )
  attached_ability.attributes = {
    score: row[2],
    unit: row[3]
  }
  save_and_print(attached_ability, "#{vip_ability.vip_level}, #{ability.name}")
end

# コアアビリティにあるアビリティ
CSV.foreach('db/seeds/attached_core_abilities.csv') do |row|
  hero = Hero.find_by(name: row[0])
  raise "ERROR: not found hero '#{row[0]}'" if hero.blank?

  ability = Ability.find_by(name: row[1])
  raise "ERROR: not found ability '#{row[1]}'" if ability.blank?

  attached_ability = AttachedCoreAbility.find_or_initialize_by(
    hero: hero, ability: ability
  )
  attached_ability.attributes = {
    score: row[2],
    unit: row[3]
  }
  save_and_print(attached_ability, "#{hero.name}, #{ability.name}")
end

# 装備アビリティにあるアビリティ
CSV.foreach('db/seeds/attached_equipage_abilities.csv') do |row|
  equipage = Equipage.find_by(name: row[0])
  raise "ERROR: not found equipage '#{row[0]}'" if equipage.blank?

  grade = Grade.find_by(level: row[1])
  raise "ERROR: not found grade '#{row[1]}'" if grade.blank?

  ability = Ability.find_by(name: row[2])
  raise "ERROR: not found ability '#{row[2]}'" if ability.blank?

  attached_ability = AttachedEquipageAbility.find_or_initialize_by(
    equipage: equipage, grade: grade, ability: ability
  )
  attached_ability.attributes = {
    score: row[3],
    unit: row[4]
  }
  save_and_print(
    attached_ability,
    "#{equipage.name}, #{grade.level}, #{ability.name}"
  )
end

# カードアビリティ
CSV.foreach('db/seeds/attached_card_abilities.csv') do |row|
  card = Card.find_by(monster_name: row[0])
  raise "ERROR: not found card '#{row[0]}'" if card.blank?

  grade = Grade.find_by(level: row[1])
  raise "ERROR: not found grade '#{row[1]}'" if grade.blank?

  ability = Ability.find_by(name: row[2])
  raise "ERROR: not found ability '#{row[2]}'" if ability.blank?

  attached_ability = AttachedCardAbility.find_or_initialize_by(
    card: card, grade: grade, ability: ability
  )
  attached_ability.attributes = {
    score: row[3],
    unit: row[4]
  }
  save_and_print(
    attached_ability,
    "#{card.monster_name}, #{grade.level}, #{ability.name}"
  )
end

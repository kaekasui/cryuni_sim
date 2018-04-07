# frozen_string_literal: true

require 'rails_helper'
require 'rake'

describe 'db:seed:unused' do
  subject { @rake['db:seed:unused'] }

  before :all do
    @rake = Rake::Application.new
    Rake.application = @rake
    Rake.application.rake_require 'tasks/seed/unused'
    Rake::Task.define_task(:environment)
  end

  before :each do
    subject.reenable
  end

  context 'there are some unused heros' do
    before do
      create(:hero, name: '平将門')
      create(:hero, name: 'トリスタン')
    end

    it 'remove 2 unused heros' do
      expect do
        subject.invoke
      end.to change(Hero, :count).by(-2)
    end
  end

  context 'there are some unused abilities' do
    before do
      create(:ability, name: '魔獣攻撃力2')
      create(:ability, name: '英雄移動速度3')
    end

    it 'remove 2 unused abilities' do
      expect do
        subject.invoke
      end.to change(Ability, :count).by(-2)
    end
  end

  context 'there are some unused grades' do
    before do
      create(:grade, name: '最上級')
      create(:grade, name: '最高級')
    end

    it 'remove 2 unused grades' do
      expect do
        subject.invoke
      end.to change(Grade, :count).by(-2)
    end
  end

  context 'there are some unused vip abilities' do
    before do
      create(:vip_ability, vip_level: 25)
      create(:vip_ability, vip_level: 30)
    end

    it 'remove 2 unused vip abilities' do
      expect do
        subject.invoke
      end.to change(VipAbility, :count).by(-2)
    end
  end

  context 'there are some unused hero abilities' do
    before do
      create(:hero_ability, stage: 8)
      create(:hero_ability, stage: 9)
    end

    it 'remove 2 unused hero abilities' do
      expect do
        subject.invoke
      end.to change(HeroAbility, :count).by(-2)
    end
  end

  context 'there are some unused equipages' do
    before do
      create(:equipage, name: '対魔獣装備')
      create(:equipage, name: '対魔獣装備2')
    end

    it 'remove 2 unused equipages' do
      expect do
        subject.invoke
      end.to change(Equipage, :count).by(-2)
    end
  end

  context 'there are some unused cards' do
    before do
      create(:card, name: '魔獣カード')
      create(:card, name: '魔獣2カード')
    end

    it 'remove 2 unused cards' do
      expect do
        subject.invoke
      end.to change(Card, :count).by(-2)
    end
  end

  context 'there are some unused attached hero abilities' do
    let!(:hero1) { create(:hero, name: 'クローディア') }
    let!(:hero2) { create(:hero, name: 'ランスロット') }
    let!(:hero_ability1) { create(:hero_ability, hero: hero1, stage: 10) }
    let!(:hero_ability2) { create(:hero_ability, hero: hero2, stage: 11) }
    let!(:hero_ability3) { create(:hero_ability, hero: hero2, stage: 12) }
    let!(:ability) { create(:ability, name: '英雄移動速度') }
    let!(:ability1) { create(:ability, name: '対悪魔攻撃力') }
    let!(:ability2) { create(:ability, name: '対無機物攻撃力') }

    before do
      create(:attached_hero_ability,
             hero_ability: hero_ability1, ability: ability, score: 5)
      create(:attached_hero_ability,
             hero_ability: hero_ability1, ability: ability1, score: 5)
      create(:attached_hero_ability,
             hero_ability: hero_ability1, ability: ability2, score: 10)
      create(:attached_hero_ability,
             hero_ability: hero_ability2, ability: ability1, score: 5)
      create(:attached_hero_ability,
             hero_ability: hero_ability2, ability: ability2, score: 10)
      create(:attached_hero_ability,
             hero_ability: hero_ability3, ability: ability1, score: 10)
      create(:attached_hero_ability,
             hero_ability: hero_ability3, ability: ability2, score: 20)
    end

    it 'remove 5 unused attached hero abilities' do
      expect do
        subject.invoke
      end.to change(AttachedHeroAbility, :count).by(-6)
    end
  end

  context 'there are some unused attached vip abilities' do
    let!(:vip_ability1) { create(:vip_ability, vip_level: 10) }
    let!(:vip_ability2) { create(:vip_ability, vip_level: 11) }
    let!(:vip_ability3) { create(:vip_ability, vip_level: 12) }
    let!(:ability) { create(:ability, name: '英雄移動速度') }
    let!(:ability1) { create(:ability, name: '対悪魔攻撃力') }
    let!(:ability2) { create(:ability, name: '対無機物攻撃力') }

    before do
      create(:attached_vip_ability,
             vip_ability: vip_ability1, ability: ability, score: 5)
      create(:attached_vip_ability,
             vip_ability: vip_ability1, ability: ability1, score: 5)
      create(:attached_vip_ability,
             vip_ability: vip_ability1, ability: ability2, score: 10)
      create(:attached_vip_ability,
             vip_ability: vip_ability2, ability: ability1, score: 5)
      create(:attached_vip_ability,
             vip_ability: vip_ability2, ability: ability2, score: 10)
      create(:attached_vip_ability,
             vip_ability: vip_ability3, ability: ability1, score: 10)
      create(:attached_vip_ability,
             vip_ability: vip_ability3, ability: ability2, score: 20)
    end

    it 'remove 4 unused attached vip abilities' do
      expect do
        subject.invoke
      end.to change(AttachedVipAbility, :count).by(-4)
    end
  end

  context 'there are some unused attached core abilities' do
    let!(:hero1) { create(:hero, name: 'ランスロット') }
    let!(:hero2) { create(:hero, name: 'クローディア') }
    let!(:ability1) { create(:ability, name: '英雄移動速度') }
    let!(:ability2) { create(:ability, name: '対悪魔攻撃力') }
    let!(:ability3) { create(:ability, name: '対無機物攻撃力') }

    before do
      create(:attached_core_ability,
             hero: hero1, ability: ability1, score: 5)
      create(:attached_core_ability,
             hero: hero1, ability: ability2, score: 5)
      create(:attached_core_ability,
             hero: hero1, ability: ability3, score: 10)
      create(:attached_core_ability,
             hero: hero2, ability: ability1, score: 5)
      create(:attached_core_ability,
             hero: hero2, ability: ability2, score: 10)
      create(:attached_core_ability,
             hero: hero2, ability: ability3, score: 10)
    end

    it 'remove 5 unused attached core abilities' do
      expect do
        subject.invoke
      end.to change(AttachedCoreAbility, :count).by(-5)
    end
  end

  context 'there are some unused attached equipage abilities' do
    let!(:equipage1) { create(:equipage, :hand, name: 'エリートソード') }
    let!(:equipage2) { create(:equipage, :hand, name: '光翼のセイバー') }
    let!(:grade1) { create(:grade, name: '普通', level: 1) }
    let!(:grade2) { create(:grade, name: '上等', level: 2) }
    let!(:ability1) { create(:ability, name: '英雄移動速度') }
    let!(:ability2) { create(:ability, name: '対悪魔攻撃力') }
    let!(:ability3) { create(:ability, name: '対無機物攻撃力') }

    before do
      create(:attached_equipage_ability,
             equipage: equipage1, grade: grade1, ability: ability1)
      create(:attached_equipage_ability,
             equipage: equipage1, grade: grade1, ability: ability2)
      create(:attached_equipage_ability,
             equipage: equipage1, grade: grade1, ability: ability3)
      create(:attached_equipage_ability,
             equipage: equipage1, grade: grade2, ability: ability1)
      create(:attached_equipage_ability,
             equipage: equipage2, grade: grade1, ability: ability1)
      create(:attached_equipage_ability,
             equipage: equipage2, grade: grade2, ability: ability3)
    end

    it 'remove 5 unused attached core abilities' do
      expect do
        subject.invoke
      end.to change(AttachedEquipageAbility, :count).by(-5)
    end
  end
end

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
      create(:attached_hero_ability, hero_ability: hero_ability1, ability: ability, score: 5)
      create(:attached_hero_ability, hero_ability: hero_ability1, ability: ability1, score: 5)
      create(:attached_hero_ability, hero_ability: hero_ability1, ability: ability2, score: 10)
      create(:attached_hero_ability, hero_ability: hero_ability2, ability: ability1, score: 5)
      create(:attached_hero_ability, hero_ability: hero_ability2, ability: ability2, score: 10)
      create(:attached_hero_ability, hero_ability: hero_ability3, ability: ability1, score: 10)
      create(:attached_hero_ability, hero_ability: hero_ability3, ability: ability2, score: 20)
    end

    it 'remove 5 unused attached hero abilities' do
      expect do
        subject.invoke
      end.to change(AttachedHeroAbility, :count).by(-6)
    end
  end
end

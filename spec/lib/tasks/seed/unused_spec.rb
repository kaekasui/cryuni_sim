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
      expect{
        subject.invoke
      }.to change(Hero, :count).by(-2)
    end
  end

  context 'there are some unused abilities' do
    before do
      create(:ability, name: '魔獣攻撃力2')
      create(:ability, name: '英雄移動速度3')
    end

    it 'remove 2 unused abilities' do
      expect{
        subject.invoke
      }.to change(Ability, :count).by(-2)
    end
  end

  context 'there are some unused grades' do
    before do
      create(:grade, name: '最上級')
      create(:grade, name: '最高級')
    end

    it 'remove 2 unused grades' do
      expect{
        subject.invoke
      }.to change(Grade, :count).by(-2)
    end
  end

  context 'there are some unused vip abilities' do
    before do
      create(:vip_ability, vip_level: 25)
      create(:vip_ability, vip_level: 30)
    end

    it 'remove 2 unused grades' do
      expect{
        subject.invoke
      }.to change(VipAbility, :count).by(-2)
    end
  end

  context 'there are some unused hero abilities' do
    before do
      create(:hero_ability, stage: 8)
      create(:hero_ability, stage: 9)
    end

    it 'remove 2 unused grades' do
      expect{
        subject.invoke
      }.to change(HeroAbility, :count).by(-2)
    end
  end

end

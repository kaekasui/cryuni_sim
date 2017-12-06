# frozen_string_literal: true

require 'rails_helper'

feature 'ヒーローアビリティ', js: true do
  let!(:hero1) do
    create(:hero, name: 'エンキドゥ',
                  image_name: 'enkidu.jpg', whole_image_name: 'sd_enkidu.png')
  end
  let!(:hero2) do
    create(:hero, name: 'ジャンヌ・ダルク',
                  image_name: 'jeanne.jpg', whole_image_name: 'sd_jeanne.png')
  end
  let!(:hero_ability1) { create(:hero_ability, hero: hero1, stage: 0) }
  let!(:hero_ability2) { create(:hero_ability, hero: hero2, stage: 1) }
  let!(:ability) { create(:ability, name: '亜人攻撃力') }
  let!(:attached_ability1) do
    create(:attached_ability,
           hero_ability: hero_ability1, ability: ability, score: 10)
  end
  let!(:attached_ability2) do
    create(:attached_ability,
           hero_ability: hero_ability2, ability: ability, score: 30)
  end

  background do
    visit root_path
  end

  scenario '英雄一覧が表示されること' do
    within '.heroAbilitySettingComponent' do
      expect(page).to have_css "img[src*='enkidu.jpg']"
      expect(page).to have_css "img[src*='jeanne.jpg']"
    end
  end

  scenario '英雄一覧から、各英雄のヒーローアビリティが表示されること' do
    within '.heroAbilitySettingComponent' do
      find("img[alt='ジャンヌ・ダルク']").click
    end

    within '.heroAbilitiesComponent' do
      expect(page).to have_content '亜人攻撃力 30.0 %'
      expect(page).to have_no_content '亜人攻撃力 10.0 %'
    end

    within '.heroAbilitySettingComponent' do
      find("img[alt='エンキドゥ']").click
    end

    within '.heroAbilitiesComponent' do
      expect(page).to have_no_content '亜人攻撃力 30.0 %'
      expect(page).to have_content '亜人攻撃力 10.0 %'
    end
  end

  scenario '英雄一覧から、各英雄の全身画像が表示されること' do
    within '.heroAbilitySettingComponent' do
      expect(page).to have_css "img[src*='enkidu.jpg']"
      expect(page).to have_css "img[src*='jeanne.jpg']"
      find("img[alt='ジャンヌ・ダルク']").click
    end

    within '.resultsComponent' do
      expect(page).to have_css "img[src*='sd_jeanne.png'"
    end
  end
end

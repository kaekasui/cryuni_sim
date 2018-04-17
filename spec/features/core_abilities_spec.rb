# frozen_string_literal: true

require 'rails_helper'

feature 'コアアビリティ', js: true do
  let!(:hero1) do
    create(:hero, name: 'エンキドゥ', locked: true,
                  image_name: 'enkidu.jpg', whole_image_name: 'sd_enkidu.png')
  end
  let!(:hero2) do
    create(:hero, name: 'ジャンヌ・ダルク', locked: false,
                  image_name: 'jeanne.jpg', whole_image_name: 'sd_jeanne.png')
  end
  let!(:hero3) do
    create(:hero, name: 'ランスロット', locked: true,
                  image_name: 'lancelot.jpg', whole_image_name: 'lancelot.png')
  end
  let!(:ability1) { create(:ability, name: '英雄移動速度') }
  let!(:ability2) { create(:ability, name: '対魔獣攻撃力') }

  let!(:attached_ability1) do
    create(:attached_core_ability,
           hero: hero1, ability: ability1, score: '10.0')
  end
  let!(:attached_ability2) do
    create(:attached_core_ability,
           hero: hero1, ability: ability2, score: '10.0')
  end
  let!(:attached_ability3) do
    create(:attached_core_ability,
           hero: hero3, ability: ability1, score: '10.0')
  end
  let!(:attached_ability4) do
    create(:attached_core_ability,
           hero: hero3, ability: ability2, score: '20.0')
  end

  background do
    visit root_path
  end

  scenario '英雄一覧が表示されること' do
    within '.coreAbilitySettingComponent' do
      expect(page).to have_css "img[src*='enkidu.jpg']"
      expect(page).to have_css "img[src*='jeanne.jpg']"
    end
  end

  context '英雄一覧から、コアアビリティがデフォルトで有効になっている英雄' do
    scenario '対象の英雄に鍵が表示されていないこと' do
      within '.coreAbilitySettingComponent' do
        # 画像が英雄の画像しかない = 鍵画像がない
        expect(page.all('.coreHeroComponent')[1].find('img')['src'])
          .to have_content 'assets/hero_icons/jeanne.jpg'
      end
    end

    scenario '対象の英雄をクリックしても鍵が表示されていないこと' do
      within '.coreAbilitySettingComponent' do
        find("img[alt='ジャンヌ・ダルク']").click

        # 画像が英雄の画像しかない = 鍵画像がない
        expect(page.all('.coreHeroComponent')[1].find('img')['src'])
          .to have_content 'assets/hero_icons/jeanne.jpg'
      end
    end
  end

  context '英雄一覧から、コアアビリティがデフォルトで無効になっている英雄' do
    scenario '対象の英雄に鍵が表示されていること' do
      within '.coreAbilitySettingComponent' do
        expect(page.all('.coreHeroComponent')[0].all('img')[0]['src'])
          .to have_content 'assets/hero_icons/enkidu.jpg'
        expect(page.all('.coreHeroComponent')[0].all('img')[1]['src'])
          .to have_content 'assets/hero_icons/padlock.png'
      end
    end

    scenario '対象の英雄のクリックで、鍵の表示非表示が切り替わること' do
      within '.coreAbilitySettingComponent' do
        # NOTE: img[alt='エンキドゥ']の画像は、not clickable だったためpadlockを指定
        page.all('.padlock')[0].click

        expect(page.all('.coreHeroComponent')[0].find('img')['src'])
          .to have_content 'assets/hero_icons/enkidu.jpg'

        find("img[alt='エンキドゥ']").click
        expect(page.all('.coreHeroComponent')[0].all('img')[0]['src'])
          .to have_content 'assets/hero_icons/enkidu.jpg'
        expect(page.all('.coreHeroComponent')[0].all('img')[1]['src'])
          .to have_content 'assets/hero_icons/padlock.png'
      end
    end

    scenario '対象の英雄のクリックで、コアアビリティが結果に表示されること' do
      within '.coreAbilitySettingComponent' do
        # NOTE: img[alt='エンキドゥ']の画像は、not clickable だったためpadlockを指定
        page.all('.padlock')[0].click
      end

      within '.resultCoreAbilityComponent' do
        expect(page).to have_content '英雄移動速度 10.0 %'
        expect(page).to have_content '対魔獣攻撃力 10.0 %'
        within '.resultTotalCoreAbilityComponent' do
          expect(page).to have_content '英雄移動速度 10 %'
          expect(page).to have_content '対魔獣攻撃力 10 %'
        end
      end

      within '.coreAbilitySettingComponent' do
        page.all('.padlock')[0].click
      end

      within '.resultCoreAbilityComponent' do
        expect(page).to have_content '英雄移動速度 10.0 %'
        expect(page).to have_content '対魔獣攻撃力 10.0 %'
        expect(page).to have_content '対魔獣攻撃力 20.0 %'
        within '.resultTotalCoreAbilityComponent' do
          expect(page).to have_content '英雄移動速度 20 %'
          expect(page).to have_content '対魔獣攻撃力 30 %'
        end
      end
    end
  end
end

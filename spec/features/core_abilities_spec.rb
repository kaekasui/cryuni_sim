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
          .to have_content 'assets/jeanne.jpg'
      end
    end

    scenario '対象の英雄をクリックしても鍵が表示されていないこと' do
      within '.coreAbilitySettingComponent' do
        find("img[alt='ジャンヌ・ダルク']").click

        # 画像が英雄の画像しかない = 鍵画像がない
        expect(page.all('.coreHeroComponent')[1].find('img')['src'])
          .to have_content 'assets/jeanne.jpg'
      end
    end
  end

  context '英雄一覧から、コアアビリティがデフォルトで無効になっている英雄' do
    scenario '対象の英雄に鍵が表示されていること' do
      within '.coreAbilitySettingComponent' do
        expect(page.all('.coreHeroComponent')[0].all('img')[0]['src'])
          .to have_content 'assets/enkidu.jpg'
        expect(page.all('.coreHeroComponent')[0].all('img')[1]['src'])
          .to have_content 'assets/padlock.png'
      end
    end

    scenario '対象の英雄のクリックで、鍵の表示非表示が切り替わること' do
      within '.coreAbilitySettingComponent' do
        # NOTE: img[alt='エンキドゥ']の画像は、not clickable だったためpadlockを指定
        find('.padlock').click

        expect(page.all('.coreHeroComponent')[0].find('img')['src'])
          .to have_content 'assets/enkidu.jpg'

        find("img[alt='エンキドゥ']").click
        expect(page.all('.coreHeroComponent')[0].all('img')[0]['src'])
          .to have_content 'assets/enkidu.jpg'
        expect(page.all('.coreHeroComponent')[0].all('img')[1]['src'])
          .to have_content 'assets/padlock.png'
      end
    end
  end
end

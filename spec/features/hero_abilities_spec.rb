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
  let!(:hero_ability1) do
    create(:hero_ability,
           hero: hero1, intimacy_level_from: 1, intimacy_level_to: 10, stage: 0)
  end
  let!(:hero_ability2) do
    create(:hero_ability,
           hero: hero2, intimacy_level_from: 8, intimacy_level_to: 15, stage: 1)
  end
  let!(:ability) { create(:ability, name: '亜人攻撃力') }
  let!(:attached_ability1) do
    create(:attached_hero_ability,
           hero_ability: hero_ability1, ability: ability, score: 10)
  end
  let!(:attached_ability2) do
    create(:attached_hero_ability,
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

  context '英雄親密度レベルに当てはまるヒーローアビリティがある場合' do
    scenario 'あてはまるレベル帯がハイライトされること' do
      within '.heroAbilitySettingComponent' do
        find("img[alt='ジャンヌ・ダルク']").click
        within '.heroAbilitiesComponent' do
          expect(page).to have_no_css 'tr.active-ability.selected-ability'
          find('tr.active-ability').click
          expect(page).to have_css 'tr.active-ability.selected-ability'
        end
      end
    end

    scenario '英雄表示部分にヒーローアビリティが表示されること' do
      within '.heroAbilitySettingComponent' do
        find("img[alt='ジャンヌ・ダルク']").click
        within '.heroAbilitiesComponent' do
          find('tr.active-ability').click
        end
      end

      within '.resultHeroAbilityComponent' do
        expect(page).to have_content '亜人攻撃力 30.0 %'
        expect(page).to have_no_content '亜人攻撃力 10.0 %'
      end

      within '.heroAbilitySettingComponent' do
        find("img[alt='エンキドゥ']").click
      end

      within '.resultHeroAbilityComponent' do
        expect(page).to have_no_content '亜人攻撃力 30.0 %'
        expect(page).to have_no_content '亜人攻撃力 10.0 %'
      end

      within '.heroAbilitySettingComponent' do
        within '.heroAbilitiesComponent' do
          find('tr.active-ability').click
        end
      end

      within '.resultHeroAbilityComponent' do
        expect(page).to have_no_content '亜人攻撃力 30.0 %'
        expect(page).to have_content '亜人攻撃力 10.0 %'
      end
    end
  end

  context '英雄親密度レベルに当てはまるヒーローアビリティがない場合' do
    scenario 'ハイライトされている行がないこと' do
      within '.heroAbilitySettingComponent' do
        find("img[alt='エンキドゥ']").click
        within '.heroAbilitiesComponent' do
          find('tr.active-ability').click
          # ハイライトされていることを確認
          expect(page).to have_css 'tr.active-ability.selected-ability'
        end
        find("img[alt='ジャンヌ・ダルク']").click
        within '.heroAbilitiesComponent' do
          # ハイライトされなくなったことを確認
          expect(page).to have_no_css 'tr.active-ability.selected-ability'
        end
      end
    end
  end

  scenario '英雄の選択で、選択中の英雄に羽アイコンが表示されること' do
    within '.heroAbilitySettingComponent' do
      # エンキドゥで、画像が1つしか見つからない=羽がない
      expect(page.all('.heroComponent')[0].find('img')['src'])
        .to have_content 'assets/enkidu.jpg'
      find("img[alt='エンキドゥ']").click

      # 羽が表示されていることを確認
      expect(page.all('.heroComponent')[0].all('img')[1]['src'])
        .to have_content 'assets/fether.png'

      find("img[alt='ジャンヌ・ダルク']").click

      # エンキドゥで、画像が1つしか見つからない=羽がない
      expect(page.all('.heroComponent')[0].find('img')['src'])
        .to have_content 'assets/enkidu.jpg'

      # 羽が移動していることを確認
      expect(page.all('.heroComponent')[1].all('img')[1]['src'])
        .to have_content 'assets/fether.png'
    end
  end

  scenario '英雄の選択で、メッセージにチェックが入ること' do
    within '.heroAbilitySettingComponent' do
      expect(page.all('.checkMessageComponent')[0].find('img')['src'])
        .to have_content 'assets/incomplete.gif'

      find("img[alt='エンキドゥ']").click

      expect(page.all('.checkMessageComponent')[0].find('img')['src'])
        .to have_content 'assets/complete.gif'
    end
  end

  scenario '英雄親密度のレベル帯の選択で、メッセージにチェックが入ること' do
    within '.heroAbilitySettingComponent' do
      find("img[alt='エンキドゥ']").click

      expect(page.all('.checkMessageComponent')[1].find('img')['src'])
        .to have_content 'assets/incomplete.gif'

      find('tr.active-ability').click

      expect(page.all('.checkMessageComponent')[1].find('img')['src'])
        .to have_content 'assets/complete.gif'
    end
  end
end

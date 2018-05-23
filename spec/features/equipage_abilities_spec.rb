# frozen_string_literal: true

require 'rails_helper'

feature '装備アビリティ', js: true do
  let!(:head_equipage1) { create(:equipage, :head) }
  let!(:head_equipage2) { create(:equipage, :head) }
  let!(:hand_equipage) { create(:equipage, :hand) }
  let!(:grade1) { create(:grade, level: 1, name: '普通') }
  let!(:grade2) { create(:grade, level: 2, name: '上等') }
  let!(:grade3) { create(:grade, level: 3, name: '高級') }

  let!(:ability1) { create(:ability, name: '英雄移動速度') }
  let!(:ability2) { create(:ability, name: '対魔獣攻撃力') }
  let!(:attached_ability1) do
    create(:attached_equipage_ability,
           ability: ability1, grade: grade1, equipage: head_equipage1,
           score: 10.0)
  end
  let!(:attached_ability2) do
    create(:attached_equipage_ability,
           ability: ability1, grade: grade1, equipage: head_equipage2,
           score: 20.0)
  end
  let!(:attached_ability3) do
    create(:attached_equipage_ability,
           ability: ability2, grade: grade1, equipage: head_equipage2,
           score: 20.0)
  end
  let!(:attached_ability4) do
    create(:attached_equipage_ability,
           ability: ability2, grade: grade2, equipage: head_equipage2,
           score: 40.0)
  end

  background do
    visit root_path
    within '.equipage.equipage-head' do
      click_on '装備変更'
    end
    # TODO: 画像にする
    # page.all('.equipageComponent')[1].find('img').click
  end

  scenario 'モーダルで選択した装備が表示されること' do
    within '.ReactModal__Overlay.ReactModal__Overlay--after-open' do
      expect(page).to have_content 'なし'
      expect(page).to have_content head_equipage1.name
      expect(page).to have_content head_equipage2.name

      page.all('.modalEquipageComponent img.set-equipage')[1].click
    end

    # 選択した装備が表示される
    within '.equipageSettingComponent' do
      within '.equipage-head' do
        expect(page).to have_no_content head_equipage1.name
        expect(page).to have_content head_equipage2.name
      end
    end

    within '.equipage.equipage-head' do
      click_on '装備変更'
    end
    # TODO: 画像にする
    # page.all('.equipageComponent')[1].find('.selectable-equipage').click
    within '.ReactModal__Overlay.ReactModal__Overlay--after-open' do
      expect(page).to have_content 'なし'
      expect(page).to have_content head_equipage1.name
      expect(page).to have_content head_equipage2.name

      find('.equipage-button.remove-equipage', match: :first).click
    end

    # 装備が未選択になる
    within '.equipageSettingComponent' do
      within '.equipage-head' do
        expect(page).to have_no_content head_equipage1.name
        expect(page).to have_no_content head_equipage2.name
        expect(page).to have_css 'img'
      end
    end
  end

  scenario 'モーダルで選択した装備の詳細とグレードの選択肢と各能力を確認できること' do
    within '.ReactModal__Overlay.ReactModal__Overlay--after-open' do
      expect(page).to have_content 'なし'
      expect(page).to have_content head_equipage1.name
      expect(page).to have_content head_equipage2.name

      page.all('.modalEquipageComponent img.set-equipage')[1].click
    end

    within '.equipageSettingComponent' do
      within '.equipage-head' do
        expect(page).to have_no_content head_equipage1.name
        expect(page).to have_content head_equipage2.name
        expect(page).to have_content "装備レベル：#{head_equipage2.level}"
        expect(page).to have_content "カードスロット数：#{head_equipage2.card_slot}"

        expect(page).to have_content '普通'
        expect(page).to have_content '上等'
        expect(page).to have_no_content '高級'

        # 普通が選択されていること
        # TODO: 選択されるようにする
        # expect(page).to have_css 'label.active#level-1'

        within '.attachedAbilitiesTableComponent' do
          expect(page).to have_content '英雄移動速度 20.0 %'
          expect(page).to have_content '対魔獣攻撃力 20.0 %'
        end
        page.all('.react-tabs__tab')[1].click # 上等
        within '.attachedAbilitiesTableComponent' do
          expect(page).to have_no_content '英雄移動速度 20.0 %'
          expect(page).to have_no_content '対魔獣攻撃力 20.0 %'
          expect(page).to have_content '対魔獣攻撃力 40.0 %'
        end
      end
    end
  end

  scenario 'モーダルで装備の詳細とグレードの選択肢と各能力を確認できること' do
    within '.ReactModal__Overlay.ReactModal__Overlay--after-open' do
      element = '.modalEquipageComponent.modal-equipage-line img.info-icon'
      page.all(element)[1].hover

      expect(page).to have_content head_equipage2.name
      expect(page).to have_content "装備レベル：#{head_equipage2.level}"
      expect(page).to have_content "カードスロット数：#{head_equipage2.card_slot}"

      # 普通が選択されていること
      within '.react-tabs__tab.react-tabs__tab--selected' do
        expect(page).to have_content '普通'
        expect(page).to have_no_content '上等'
        expect(page).to have_no_content '高級'
      end
      within '.attachedAbilitiesTableComponent' do
        expect(page).to have_content '英雄移動速度 20.0 %'
        expect(page).to have_content '対魔獣攻撃力 20.0 %'
      end
      page.all('.react-tabs__tab')[1].click # 上等
      within '.attachedAbilitiesTableComponent' do
        expect(page).to have_no_content '英雄移動速度 20.0 %'
        expect(page).to have_no_content '対魔獣攻撃力 20.0 %'
        expect(page).to have_content '対魔獣攻撃力 40.0 %'
      end
    end
  end
end

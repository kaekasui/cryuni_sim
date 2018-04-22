# frozen_string_literal: true

require 'rails_helper'

feature 'カードアビリティ', js: true do
  let!(:hand_equipage) { create(:equipage, :hand, card_slot: 2) }
  let!(:card) { create(:card) }

  let!(:grade1) { create(:grade, level: 1, name: '普通') }
  let!(:grade2) { create(:grade, level: 2, name: '上等') }
  let!(:grade3) { create(:grade, level: 3, name: '高級') }

  let!(:ability1) { create(:ability, name: '英雄移動速度') }
  let!(:ability2) { create(:ability, name: '対魔獣攻撃力') }

  background do
    visit root_path
  end

  context 'モーダルで装備を選択した場合' do
    before do
      page.all('.equipageComponent')[0].find('img').click
      within '.ReactModal__Overlay.ReactModal__Overlay--after-open' do
        find('.modalEquipageComponent').click
      end

      # 選択した装備が表示される
      within '.equipageSettingComponent' do
        within '.equipage-hand' do
          expect(page).to have_content hand_equipage.name
        end
      end
    end

    scenario '装備のカードスロット分のカード領域が表示されること' do
      pending 'カード機能が凍結中のため'
      within '.equipageSettingComponent' do
        within '.equipage-hand' do
          expect(page).to have_css('.cardComponent', count: 2)
        end
      end
    end

    scenario 'モーダルで選択したカードが表示されること' do
      pending 'カード機能が凍結中のため'
      page.all('.cardComponent')[0].find('img').click
      within '.ReactModal__Overlay.ReactModal__Overlay--after-open' do
        find('.modalCardComponent').click
      end

      # 選択したカードが表示されること
      within '.equipageSettingComponent' do
        within '.equipage-hand' do
          expect(page).to have_content card.name
        end
      end
    end

    scenario 'モーダルで選択したカードのグレードの選択肢が表示されること' do
      pending 'カード機能が凍結中のため'
      page.all('.cardComponent')[0].find('img').click
      within '.ReactModal__Overlay.ReactModal__Overlay--after-open' do
        find('.modalCardComponent').click
      end

      # 選択したカードが表示されること
      within '.equipageSettingComponent' do
        within '.equipage-hand' do
          expect(page).to have_content card.name
          within '.cards' do
            within '.gradeFormComponent' do
              expect(page).to have_content '普通'
              expect(page).to have_content '上等'
              expect(page).to have_content '高級'

              # 普通が選択されていること
              expect(page).to have_css 'label.active#level-1'
            end
          end
        end
      end
    end
  end
end

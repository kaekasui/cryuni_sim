# frozen_string_literal: true

require 'rails_helper'

feature 'VIPアビリティ', js: true do
  let!(:ability1) { create(:ability, name: '英雄移動速度') }
  let!(:ability2) { create(:ability, name: '対魔獣攻撃力') }
  let!(:vip_ability1) do
    create(:vip_ability, vip_rank: 1, image_name: 'lv1.gif')
  end
  let!(:vip_ability2) do
    create(:vip_ability, vip_rank: 2, image_name: 'lv2.gif')
  end

  let!(:attached_ability1) do
    create(:attached_vip_ability,
           ability: ability1, vip_ability: vip_ability1, score: 10.0)
  end
  let!(:attached_ability2) do
    create(:attached_vip_ability,
           ability: ability2, vip_ability: vip_ability1, score: 20.0)
  end
  let!(:attached_ability3) do
    create(:attached_vip_ability,
           ability: ability1, vip_ability: vip_ability2, score: 20.0)
  end
  let!(:attached_ability4) do
    create(:attached_vip_ability,
           ability: ability2, vip_ability: vip_ability2, score: 30.0)
  end

  background do
    visit root_path
  end

  scenario '選択したVIPレベルがアクティブになること' do
    within '.vipLevelFormComponent' do
      expect(page).to have_no_css '.btn-group label.active#level-1'
      find('#level-1').click

      expect(page).to have_css '.btn-group label.active#level-1'
    end
  end

  scenario '選択したVIPレベルのアビリティが結果に表示されること' do
    within '.vipLevelFormComponent' do
      find('#level-1').click
    end

    within '.resultVipAbilityComponent' do
      expect(page).to have_content '英雄移動速度 10.0 %'
      expect(page).to have_content '対魔獣攻撃力 20.0 %'
    end

    within '.vipLevelFormComponent' do
      find('#level-2').click
    end

    within '.resultVipAbilityComponent' do
      expect(page).to have_no_content '英雄移動速度 10.0 %'
      expect(page).to have_content '英雄移動速度 20.0 %'
      expect(page).to have_no_content '対魔獣攻撃力 20.0 %'
      expect(page).to have_content '対魔獣攻撃力 30.0 %'
    end
  end
end

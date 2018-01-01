# frozen_string_literal: true

require 'rails_helper'

RSpec.describe AttachedEquipageAbility, type: :model do
  describe 'relationship' do
    it { is_expected.to belong_to(:ability) }
    it { is_expected.to belong_to(:equipage) }
    it { is_expected.to belong_to(:grade) }
  end
end

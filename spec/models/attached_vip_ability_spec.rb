# frozen_string_literal: true

require 'rails_helper'

RSpec.describe AttachedVipAbility, type: :model do
  describe 'relationship' do
    it { is_expected.to belong_to(:ability) }
    it { is_expected.to belong_to(:vip_ability) }
  end
end

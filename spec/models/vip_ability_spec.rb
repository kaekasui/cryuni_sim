# frozen_string_literal: true

require 'rails_helper'

RSpec.describe VipAbility, type: :model do
  describe 'relationship' do
    it { is_expected.to have_many(:attached_vip_abilities) }
  end
end

# frozen_string_literal: true

require 'rails_helper'

RSpec.describe AttachedCardAbility, type: :model do
  describe 'relationship' do
    it { is_expected.to belong_to(:ability) }
    it { is_expected.to belong_to(:card) }
    it { is_expected.to belong_to(:grade) }
  end
end

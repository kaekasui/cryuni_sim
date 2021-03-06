# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Grade, type: :model do
  describe 'relationship' do
    it { is_expected.to have_many(:attached_equipage_abilities) }
    it { is_expected.to have_many(:attached_card_abilities) }
  end
end

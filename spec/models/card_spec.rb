# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Card, type: :model do
  describe 'relationship' do
    it { is_expected.to have_many(:attached_card_abilities) }
  end
end

# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Hero, type: :model do
  describe 'relationship' do
    it { is_expected.to have_many(:hero_abilities) }
    it { is_expected.to have_many(:attached_core_abilities) }
  end

  describe 'validation' do
    it { is_expected.to validate_presence_of(:name) }
  end
end

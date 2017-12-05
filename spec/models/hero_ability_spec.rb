# frozen_string_literal: true

require 'rails_helper'

RSpec.describe HeroAbility, type: :model do
  describe 'relationship' do
    it { is_expected.to belong_to(:hero) }
    it { is_expected.to have_many(:attached_abilities) }
  end
end

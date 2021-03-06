# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Equipage, type: :model do
  describe 'relationship' do
    it { is_expected.to have_many(:attached_equipage_abilities) }
  end
end

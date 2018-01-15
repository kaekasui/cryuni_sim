# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Ability, type: :model do
  describe 'relationship' do
    it { is_expected.to have_many(:attached_abilities).dependent(:destroy) }
  end

  describe 'validation' do
    it { is_expected.to validate_presence_of(:name) }
  end
end

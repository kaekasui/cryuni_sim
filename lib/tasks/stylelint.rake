# frozen_string_literal: true

task :stylelint do
  cd 'frontend' do
    sh 'npm install stylelint'
    sh 'npm run stylelint ../app/assets/stylesheets/*'
  end
end

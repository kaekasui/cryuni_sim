# frozen_string_literal: true

task :eslint do
  cd 'frontend' do
    sh 'npm install eslint'
    sh 'npm run eslint src/javascripts/**/*.js'
  end
end

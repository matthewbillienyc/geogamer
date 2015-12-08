require 'spec_helper'

describe 'User signup, login and logout' do
  User.destroy_all

  context 'when signing up as new user' do

    it 'can signup new user' do
      visit 'signup'
      fill_in('user[name]', with: 'Junior')
      fill_in('user[email]', with: 'junior@junior.com')
      fill_in('user[password]', with: 'junior')
      fill_in('user[password_confirmation]', with: 'junior')

      click_button 'Sign Up'
      expect(page).to have_text('Welcome')
      expect(User.find_by(name: "Junior")).to be_instance_of(User)
    end

    it 'cannot sign up user with an email already being used' do
      visit 'signup'

      fill_in('user[name]', with: 'Junior')
      fill_in('user[email]', with: 'junior@junior.com')
      fill_in('user[password]', with: 'junior')
      fill_in('user[password_confirmation]', with: 'junior')

      click_button 'Sign Up'
      expect(page).to have_text('error')
    end

    it 'remains logged in after signing up' do
      visit 'signup'

      fill_in('user[name]', with: 'Senior')
      fill_in('user[email]', with: 'senior@senior.com')
      fill_in('user[password]', with: 'senior')
      fill_in('user[password_confirmation]', with: 'senior')

      click_button 'Sign Up'
      expect(page).to have_button('Start a new game')
    end
  end

  context 'logging out' do
    it "can log out" do
      visit 'login'

      fill_in('session[email]', with: 'senior@senior.com')
      fill_in('session[password]', with: 'senior')

      click_button 'Log in'
      expect(page).to have_link('Log Out')

      click_link 'Log Out'
      expect(page).to have_text('You are tracking a mysterious figure.')
    end

    it "can succesfully log out and redirect to root" do
      visit 'login'

      fill_in('session[email]', with: 'senior@senior.com')
      fill_in('session[password]', with: 'senior')

      click_button 'Log in'

      click_link 'Log Out'
      expect(page).to have_text('You are tracking a mysterious figure.')
    end

  end

end

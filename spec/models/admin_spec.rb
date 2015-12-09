require 'spec_helper'

describe 'Admin' do

  it 'can access Admin users page' do
    User.create({name: "admin", email: "admin@admin.com", password: 'admin', password_confirmation: 'admin', admin: true})
    visit 'login'
    fill_in('session[email]', with: 'admin@admin.com')
    fill_in('session[password]', with: 'admin')

    click_button 'Log in'
    visit '/admin/users'
    expect(page).to have_link('Delete this user')
  end

  it 'can delete user' do
    User.destroy_all
    User.create({name: "jane", email: "jane@jane.com", password: 'jane', password_confirmation: 'jane', admin: false})
    current_user = User.create({name: "admin", email: "admin@admin.com", password: 'admin', password_confirmation: 'admin', admin: true})
    
    visit 'login'
    fill_in('session[email]', with: 'admin@admin.com')
    fill_in('session[password]', with: 'admin')
    click_button 'Log in'
    visit '/admin/users'
    expect(page).to have_text('Jane')
    first('.delete').click_link 'Delete this user'
    expect(page).to_not have_text('Jane')
  end

end

describe 'Without admin privilege' do
  it 'cannot access Admin users page' do
    User.create({name: "jane", email: "jane@jane.com", password: 'jane', password_confirmation: 'jane', admin: false})
    visit 'login'
    fill_in('session[email]', with: 'jane@jane.com')
    fill_in('session[password]', with: 'jane')

    click_button 'Log in'
    visit '/admin/users'
    expect(page).to have_text('You are tracking a mysterious figure')
  end
end
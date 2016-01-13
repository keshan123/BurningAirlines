# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create(:name => 'Bobbit', :email => 'bobbit@email.com',  :password => 'chicken', :password_confirmation => 'chicken', :admin => true)
u2 = User.create(:name => 'Squiggles', :email => 'squiggles@email.com',  :password => 'chicken', :password_confirmation => 'chicken')
u3 = User.create(:name => 'Zippy', :email => 'zippy@email.com',  :password => 'chicken', :password_confirmation => 'chicken')
u4 = User.create(:name => 'Lambert', :email => 'lambert@email.com',  :password => 'chicken', :password_confirmation => 'chicken')
u5 = User.create(:name => 'Bubbles', :email => 'bubbles@email.com',  :password => 'chicken', :password_confirmation => 'chicken')

p1 =Plane.create(:name => 'Boing', :rows => '100',  :columns => 'F')
p3 =Plane.create(:name => 'Airbus', :rows => '70',  :columns => 'F')
p4 =Plane.create(:name => 'Mitusbishi', :rows => '40',  :columns => 'F')
p5 =Plane.create(:name => 'XXXXX', :rows => '200',  :columns => 'F')
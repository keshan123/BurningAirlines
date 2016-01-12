# == Schema Information
#
# Table name: flights
#
#  id           :integer          not null, primary key
#  flightnumber :string
#  origin       :string
#  destination  :string
#  date         :date
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Flight < ActiveRecord::Base
end

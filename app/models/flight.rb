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
#  plane_id     :integer
#

class Flight < ActiveRecord::Base
  belongs_to :plane
end

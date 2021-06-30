class Task < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :due_date, presence: true
  before_save :default_value

  private

  def default_value
    self.completed = false if self.completed.nil?
  end
end

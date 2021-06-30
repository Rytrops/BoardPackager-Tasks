require 'rails_helper'

RSpec.describe Task, type: :model do
  describe 'validations' do
    it 'ensures all required  fiels are present in order to save' do
      task = Task.new
      expect(task.valid?).to be(false)
    end


     it 'should save a valid record' do
      task = Task.new(title: "Test Task", description: "description goes here",due_date: '2021-06-29')
      expect(task.valid?).to be(true)
      task.save
      expect(Task.count).to be(1)
    end
  end
end

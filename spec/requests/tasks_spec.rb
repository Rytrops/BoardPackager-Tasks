require 'rails_helper'

RSpec.describe "Tasks", type: :request do
  describe "GET /index" do
    it 'returns a json response with all tasks' do
      Task.create(title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in imperdiet lacus. Nulla sodales, tortor ac bibendum blandit, purus neque aliquet metus, vitae finibus ex felis sed urna. Fusce aliquet purus metus, vitae congue nulla pharetra eu. Nulla quis laoreet sem, at egestas dui.', completed: false, due_date: DateTime.new(2021, 8, 29, 22, 35, 0) )
      Task.create(title: 'Proin sit amet libero et libero consequat pharetra.', description: 'Nunc feugiat sollicitudin aliquet.', completed: true, due_date: DateTime.new(2021, 5, 29, 10, 35, 0))
      get '/api/v1/tasks'
      expect(response).to have_http_status(200)
      expect(JSON.parse(response.body)['data'].length).to eq(2)
      expect(JSON.parse(response.body)['data'].first['type']).to eq('task')
    end
  end
end

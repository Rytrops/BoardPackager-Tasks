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

  describe "GET /tasks/:id" do
    it 'returns a json response with a specific task' do
      task = Task.create(title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in imperdiet lacus. Nulla sodales, tortor ac bibendum blandit, purus neque aliquet metus, vitae finibus ex felis sed urna. Fusce aliquet purus metus, vitae congue nulla pharetra eu. Nulla quis laoreet sem, at egestas dui.', completed: false, due_date: DateTime.new(2021, 8, 29, 22, 35, 0) )
      get "/api/v1/tasks/#{task.id}"
      expect(response).to have_http_status(200)
      expect(JSON.parse(response.body)['data']['type']).to eq('task')
    end
  end

  describe "POST /tasks" do
    it 'creates a new task if it is valid' do
      post "/api/v1/tasks", params: {task: {title: 'Test Task', description: 'Test description', completed: true, due_date: DateTime.new}}
      expect(response).to have_http_status(200)
      expect(JSON.parse(response.body)).to eq("message" => "Task successfully created.")
    end

    it 'returns an error if the task is not valid' do
      post "/api/v1/tasks", params: {task: {title: 'Test Task'}}
      expect(response).to have_http_status(422)
      expect(JSON.parse(response.body)).to eq({"error"=>{"description"=>["can't be blank"], "due_date"=>["can't be blank"]}})
    end
  end

  describe "PATCH /tasks" do
    it 'updates an existing task if valid' do
      task = Task.create(title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in imperdiet lacus. Nulla sodales, tortor ac bibendum blandit, purus neque aliquet metus, vitae finibus ex felis sed urna. Fusce aliquet purus metus, vitae congue nulla pharetra eu. Nulla quis laoreet sem, at egestas dui.', completed: false, due_date: DateTime.new(2021, 8, 29, 22, 35, 0) )
      patch "/api/v1/tasks/#{task.id}", params: {task: {title: 'Test Task'}}
      expect(response).to have_http_status(200)
      expect(JSON.parse(response.body)).to eq("message" => "Task successfully updated.")
      get "/api/v1/tasks/#{task.id}"
      expect(JSON.parse(response.body)['data']['attributes']['title']).to eq('Test Task')
    end

    it 'returns an error if the task is not valid' do
      task = Task.create(title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in imperdiet lacus. Nulla sodales, tortor ac bibendum blandit, purus neque aliquet metus, vitae finibus ex felis sed urna. Fusce aliquet purus metus, vitae congue nulla pharetra eu. Nulla quis laoreet sem, at egestas dui.', completed: false, due_date: DateTime.new(2021, 8, 29, 22, 35, 0) )
      patch "/api/v1/tasks/#{task.id}", params: {task: {title: ''}}
      expect(response).to have_http_status(422)
      expect(JSON.parse(response.body)).to eq({"error" => {"title"=>["can't be blank"]}})
    end
  end
end

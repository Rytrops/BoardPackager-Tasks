class TaskSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :due_date, :completed, :created_at 
end

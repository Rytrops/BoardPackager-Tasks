class TaskSerializer
  include JSONAPI::Serializer
  attributes :title, :description,  :completed

  attribute :due_date do |task|
    task.due_date.strftime("%d-%m-%Y %H:%M")
  end

  attribute :created_at do |task|
    task.created_at.strftime("%d-%m-%Y %H:%M")
  end
  attribute :overdue do |task|
    task.due_date.strftime("%d-%m-%Y %H:%M") <= DateTime.now.strftime("%d-%m-%Y %H:%M")
  end

  attribute :due_today do |task|
    task.due_date.strftime("%d-%m-%Y") == DateTime.now.strftime("%d-%m-%Y")
  end
end

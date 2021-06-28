module Api
  module V1
    class TasksController < ApplicationController

      def index
        tasks = Task.all
        render json: TaskSerializer.new(tasks), status: 200
      end

      def show
        task = Task.find_by(id: params[:id])
        render json: TaskSerializer.new(task), status: 200
      end

    end
  end
end

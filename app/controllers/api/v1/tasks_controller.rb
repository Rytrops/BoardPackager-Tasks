module Api
  module V1
    class TasksController < ApplicationController

      def index
        tasks = Task.order(:due_date)
        render json: TaskSerializer.new(tasks), status: 200
      end

      def show
        task = Task.find_by(id: params[:id])
        render json: TaskSerializer.new(task), status: 200
      end

      def create
        task = Task.new(task_params)
        if task.save
          render json: { message: 'Task successfully created.' }, status: 200
        else
          render json: { error: task.errors.messages }, status: 422
        end
      end

      def update
        task = Task.find_by(id: params[:id])
        if task.update(task_params)
          render json: { message: 'Task successfully updated.' }, status: 200
        else
          render json: { error: task.errors.messages }, status: 422
        end
      end

      def destroy
        task = Task.find_by(id: params[:id])

        if task.destroy
          render json: { message: "Task deleted."}, status: 200
        else
          render json: { error: task.errors.messages }, status: 422
        end
      end


      private

      def task_params
        params.require(:task).permit(:title, :description, :due_date, :completed)

      end

    end
  end
end

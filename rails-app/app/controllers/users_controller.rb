class UsersController < ApplicationController
  def get_by_token
    if current_user
      render json: { user: current_user }, status: :ok
    else
      render json: { message: 'User not found'}, status: :not_found
    end
  end
end

class SessionsController < ApplicationController
  def create
    user = User.find_by(username: session_params[:username])
    if user
      if user.authenticate(session_params[:password])
        user.update!(last_logged_in: Time.zone.now)
        token = JWT.encode({ user_id: user.id }, ENV['SUPER_SECRET_KEY'])
        render :json => { token: token, user: user }, status: :ok
      else
        render :json => { message: 'There was an error logging in' }, :status => :unauthorized
      end
    else
      render :json => { message: 'There was an error logging in' }, :status => :not_found
    end
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
end

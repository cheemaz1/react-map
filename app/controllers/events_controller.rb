class EventsController < ApplicationController
    def index
        if user_signed_in?
            @user_props = current_user
        end
    end
end
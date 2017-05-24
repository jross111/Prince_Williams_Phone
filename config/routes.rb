Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :contacts
    end
  end

  # module Api
  #   module v1
  #     class ContactsController
  #     end
  #   end
  # end

end

# Rails.application.routes.draw do
#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
#   namespace :api do
#     namespace :v1 do
#       resources :students, only: [:index, :create, :destroy]
#     end
#   end
# end

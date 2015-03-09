class Comment < ActiveRecord::Base
  belongs_to :post
  belongs_to :user
  def as_json(options = {})
    super(options.merge(include: :user))
  end  
end

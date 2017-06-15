class Article < ApplicationRecord
  mount_uploader :image, ArticleUploader
  has_many :comments, dependent: :destroy
  validates :title, presence: true,
                    length: { minimum: 5 }
  searchkick
end

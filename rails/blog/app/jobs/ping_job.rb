class PingJob < ApplicationJob
  queue_as :urgent

  def perform(*args)
    p "PingJob!"
  end
end

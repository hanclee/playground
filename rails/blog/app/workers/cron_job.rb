class CronJob
  include Sidekiq::Worker
  def perform
    p "Cron Job!"
  end
end

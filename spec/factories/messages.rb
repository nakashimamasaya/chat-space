FactoryGirl.define do
  factory :message do
    body        Faker::Lorem.sentence
    image       Faker::Avatar.image
    group_id    Faker::Number.number(1)
    user_id     Faker::Number.number(1)
  end
end

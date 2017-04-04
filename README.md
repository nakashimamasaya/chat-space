# データベース設計

## messages table

belongs_to :user

belongs_to :group

|column| type | Restriction |
|:--:|:--:|:--:|
|body|text|-|
|image|string|-|
|group_id|references| null:false,foreign_key:true |
|user_id|references| null:false,foreign_key:true |


## users table

has_many :messages , through: :users_groups 

has_many :groups

has_many :users_groups

|column|type|Restriction|
|:--:|:--:|:--:|
|name|text|null:false , add_index|


## groups table

has_many :messages , through: :users_groups

has_many :users

has_many :users_groups


|column|type|Restriction|
|:--:|:--:|:--:|
|name|text|null:false|


## users_groups table

belongs_to :user

belongs_to :group

|column|type|Restriction|
|:--:|:--:|:--:|
|user_id|references|foreign_key: true|
|group_id|references|foreign_key: true|



# データベース設計

## messages table

belongs_to :user

belongs_to :group

|column| type | Restriction |
|:--:|:--:|:--:|
|body|text|-|
|image|string|-|
|group_id|integer| null:false,foreign_key:true |
|user_id|integer| null:false,foreign_key:true |


## users table

has_many :messages , through :users_groups 

has_many :groups 

|column|type|Restriction|
|:--:|:--:|:--:|
|name|text|null:false , add_index|
|email|string|null:false , uniqe:true|
|password|integer|null:false , foreign_key:true|


## groups table

has_many :messages , through :users_groups

has_many :users


|column|type|Restriction|
|:--:|:--:|:--:|
|name|text|null:false , uniqe:true|


## users_groups table

belongs_to :user

belongs_to :group

|column|type|Restriction|
|:--:|:--:|:--:|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|



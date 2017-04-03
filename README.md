# データベース設計

## messages table

belongs_to: users
belongs_to: groups

|column|type|Restriction|
|body|text||
|image|string||
|group_id|integer|null:false,foreign_key:true|
|user_id|integer|null:false,foreign_key:true|
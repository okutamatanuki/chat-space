# データベース設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unuque: true, index: true|

### Association
- has_many :messages
- has_many :members
- has_many :groups, through: :members

## group_userテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|message_id|references|null :false, foreign_key: true|

### Association
- has_many :messages
- has_many :members
- has_many :users, throudh: :members

## Messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|string||
|image|string||
|user_id|references|null :false, foreign_key: true|
|group_id|references|null :false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

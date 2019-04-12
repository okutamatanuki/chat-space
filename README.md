# データベース設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index|
|email|string|null: false, unique: true|

### Association
- has_many :chats
- had_many :groups, through: :members

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index|
|chat_id|integer|null :false, foreign_key: true|

### Association
- has_many :chats
- has_many :users, throudh: :members

## chatsテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|date|timestamps||
|image|text||
|user_id|integer|null :false, foreign_key: true|
|group_id|integer|null :false, foreign_key: true|

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

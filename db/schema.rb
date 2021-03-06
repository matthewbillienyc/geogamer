# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151208204402) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "clues", force: :cascade do |t|
    t.integer "location_id"
    t.integer "datatype_id"
    t.string  "data"
    t.string  "status",      default: "unused"
  end

  create_table "countries", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "datatypes", force: :cascade do |t|
    t.string "dtype"
    t.string "lead_in"
    t.string "difficulty"
  end

  create_table "game_clues", force: :cascade do |t|
    t.integer "game_id"
    t.integer "clue_id"
  end

  create_table "game_locations", force: :cascade do |t|
    t.integer  "game_id"
    t.integer  "location_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "games", force: :cascade do |t|
    t.integer  "user_id"
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
    t.integer  "score",            default: 0
    t.integer  "last_location_id"
    t.string   "status",           default: "in progress"
  end

  create_table "locations", force: :cascade do |t|
    t.string   "name"
    t.string   "img_url"
    t.float    "latitude"
    t.string   "longitude"
    t.string   "float"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.boolean  "admin",           default: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

end

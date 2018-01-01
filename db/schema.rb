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

ActiveRecord::Schema.define(version: 20180101144328) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "abilities", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "attached_abilities", force: :cascade do |t|
    t.bigint "ability_id", null: false
    t.bigint "hero_ability_id"
    t.decimal "score", null: false
    t.string "unit", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "type", null: false
    t.bigint "vip_ability_id"
    t.bigint "hero_id"
    t.index ["ability_id"], name: "index_attached_abilities_on_ability_id"
    t.index ["hero_ability_id"], name: "index_attached_abilities_on_hero_ability_id"
    t.index ["hero_id"], name: "index_attached_abilities_on_hero_id"
    t.index ["vip_ability_id"], name: "index_attached_abilities_on_vip_ability_id"
  end

  create_table "equipages", force: :cascade do |t|
    t.string "name", null: false
    t.integer "part", null: false
    t.integer "level", null: false
    t.integer "min_grade", null: false
    t.integer "max_grade", null: false
    t.integer "card_slot", null: false
    t.string "image_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "grades", force: :cascade do |t|
    t.integer "level", null: false
    t.string "image_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "hero_abilities", force: :cascade do |t|
    t.bigint "hero_id", null: false
    t.integer "intimacy_level_from", null: false
    t.integer "intimacy_level_to", null: false
    t.integer "stage"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hero_id"], name: "index_hero_abilities_on_hero_id"
  end

  create_table "heros", force: :cascade do |t|
    t.string "name", null: false
    t.string "image_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "whole_image_name"
    t.boolean "locked", default: true, null: false
  end

  create_table "vip_abilities", force: :cascade do |t|
    t.integer "vip_level", null: false
    t.string "image_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "attached_abilities", "abilities"
  add_foreign_key "attached_abilities", "hero_abilities"
  add_foreign_key "attached_abilities", "heros"
  add_foreign_key "attached_abilities", "vip_abilities"
  add_foreign_key "hero_abilities", "heros"
end

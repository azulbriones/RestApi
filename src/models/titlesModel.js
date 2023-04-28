const Sequelize = require("sequelize");
const db = require("../util/database");

const Titles = db.define(
  "titles",
  {
    show_id: {
      type: Sequelize.STRING(10),
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING(500),
      allowNull: false,
    },
    director: {
      type: Sequelize.STRING(500),
      allowNull: true,
    },
    cast: {
      type: Sequelize.STRING(1000),
      allowNull: true,
    },
    country: {
      type: Sequelize.STRING(200),
      allowNull: true,
    },
    date_added: {
      type: Sequelize.STRING(20),
      allowNull: true,
    },
    release_year: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    rating: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    duration: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    listed_in: {
      type: Sequelize.STRING(200),
      allowNull: true,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "titles",
    timestamps: false,
  }
);

module.exports = Titles;

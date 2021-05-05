const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define("articles", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
      type: Sequelize.TEXT,
      allowNull: false
  }
});

// Dizendo que uma categoria tem muitos artigos
Category.hasMany(Article);

// Dizendo que um artigo pertence a uma categoria
Article.belongsTo(Category);

Article.sync({force: true});

module.exports = Article;

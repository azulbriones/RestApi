const Titles = require("../models/titlesModel");

exports.getAll = async (req, res, next) => {
  try {
    const allTitles = await Titles.findAll();
    return res.status(200).json(allTitles);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const title = await Titles.findByPk(req.params.id);
    return res.status(200).json(title);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const titleModel = {
      show_id: req.body.show_id,
      type: req.body.type,
      title: req.body.title,
      director: req.body.director,
      cast: req.body.cast,
      country: req.body.country,
      date_added: req.body.date_added,
      release_year: req.body.release_year,
      rating: req.body.rating,
      duration: req.body.duration,
      listed_in: req.body.listed_in,
      description: req.body.description,
    };

    try {
      const title = await Titles.create(titleModel);
      console.log("Title created");
      return res.status(201).json(title);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const titleModel = {
      show_id: req.body.show_id,
      type: req.body.type,
      title: req.body.title,
      director: req.body.director,
      cast: req.body.cast,
      country: req.body.country,
      date_added: req.body.date_added,
      release_year: req.body.release_year,
      rating: req.body.rating,
      duration: req.body.duration,
      listed_in: req.body.listed_in,
      description: req.body.description,
    };

    try {
      const title = await Titles.update(titleModel, {
        where: { id: req.params.id },
      });
      return res.status(200).json(title);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const title = await Titles.destroy({ where: { id: req.params.id } });
    return res.status(200).json(title);
  } catch (error) {
    return res.status(500).json(error);
  }
};

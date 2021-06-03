const db = require("../models");
const Evaluation = db.evaluations;


//By default, 3 Classes will be fetched from database in page index 0
const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
  };

// Create and Save a new Evaluation
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!"+ req.body.title+ " res " +res.status });
      return;
    }
  
    // Create a Evaluation
    const evaluation = new Evaluation({
      id: req.body.id,
      title: req.body.title,
      number: req.body.number
    });
  
    // Save Evaluation in the database
    evaluation
      .save(evaluation)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Evaluation."
        });
      });
  };

// Retrieve all Evaluations from the database.
exports.findAll = (req, res) => {
    const { page, size, id } = req.query;
    var condition = id
      ? { id: { $regex: new RegExp(id), $options: "i" } }
      : {};
  
    const { limit, offset } = getPagination(page, size);
  
    Evaluation.paginate(condition, { offset, limit })
      .then((data) => {
        res.send({
          totalItems: data.totalDocs,
          evaluations: data.docs,
          totalPages: data.totalPages,
          currentPage: data.page - 1,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving evaluations.",
        });
      });
  };

// Find a single Evaluation with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Evaluation.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Evaluation with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Evaluation with id=" + id });
      });
  };

// Update a Evaluation by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Evaluation.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Evaluation with id=${id}. Maybe Evaluation was not found!`
          });
        } else res.send({ message: "Evaluation was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Evaluation with id=" + id
        });
      });
  };

// Delete a Evaluation with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Evaluation.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Evaluation with id=${id}. Maybe Evaluation was not found!`
          });
        } else {
          res.send({
            message: "Evaluation was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Evaluation with id=" + id
        });
      });
  };

// Delete all Evaluations from the database.
exports.deleteAll = (req, res) => {
    Evaluation.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Evaluations were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all evaluations."
        });
      });
  };

// Find all published Evaluations
exports.findAllPublished = (req, res) => {
    Evaluation.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving evaluations."
        });
      });
  };
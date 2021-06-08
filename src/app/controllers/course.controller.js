const db = require("../models");
const Course = db.courses;


//By default, 3 Classes will be fetched from database in page index 0
const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
  };

// Create and Save a new Course
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!"+ req.body.title+ " res " +res.status });
      return;
    }
  
    // Create a Course
    const course = new Course({
      title: req.body.title,
      description: req.body.description,
      year: req.body.year,
      published: req.body.published ? req.body.published : false
    });
  
    // Save Course in the database
    course
      .save(course)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Course."
        });
      });
  };

// Retrieve all Courses from the database.
exports.findAll = (req, res) => {
    const { page, size, title } = req.query;
    var condition = title
      ? { title: { $regex: new RegExp(title), $options: "i" } }
      : {};
  
    const { limit, offset } = getPagination(page, size);
  
    Course.paginate(condition, { offset, limit })
      .then((data) => {
        res.send({
          totalItems: data.totalDocs,
          courses: data.docs,
          totalPages: data.totalPages,
          currentPage: data.page - 1,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving courses.",
        });
      });
  };

// Find a single Course with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Course.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Course with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Course with id=" + id });
      });
  };

// Update a Course by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Course.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Course with id=${id}. Maybe Course was not found!`
          });
        } else res.send({ message: "Course was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Course with id=" + id
        });
      });
  };

// Delete a Course with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Course.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Course with id=${id}. Maybe Course was not found!`
          });
        } else {
          res.send({
            message: "Course was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Course with id=" + id
        });
      });
  };

// Delete all Courses from the database.
exports.deleteAll = (req, res) => {
    Course.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Courses were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all courses."
        });
      });
  };

// Find all published Courses
exports.findAllPublished = (req, res) => {
    Course.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving courses."
        });
      });
  };
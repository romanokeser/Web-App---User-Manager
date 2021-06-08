const db = require("../models");
const Student = db.students;


//By default, 3 Classes will be fetched from database in page index 0
const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
  };

// Create and Save a new Student
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!"+ req.body.title+ " res " +res.status });
      return;
    }
  
    // Create a Student
    const student = new Student({
      name: req.body.name,
      lastname: req.body.lastname,
      note: req.body.note,
      grade: req.body.grade
    });
  
    // Save Student in the database
    student
      .save(student)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Student."
        });
      });
  };

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
    const { page, size, name } = req.query;
    var condition = name
      ? { name: { $regex: new RegExp(name), $options: "i" } }
      : {};
  
    const { limit, offset } = getPagination(page, size);
  
    Student.paginate(condition, { offset, limit })
      .then((data) => {
        res.send({
          totalItems: data.totalDocs,
          students: data.docs,
          totalPages: data.totalPages,
          currentPage: data.page - 1,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving students.",
        });
      });
  };

// Find a single Student with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Student.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Student with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Student with id=" + id });
      });
  };

// Update a Student by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Student.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Student with id=${id}. Maybe Student was not found!`
          });
        } else res.send({ message: "Student was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Student with id=" + id
        });
      });
  };

// Delete a Student with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Student.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
          });
        } else {
          res.send({
            message: "Student was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Student with id=" + id
        });
      });
  };

// Delete all Students from the database.
exports.deleteAll = (req, res) => {
    Student.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Students were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all students."
        });
      });
  };

// Find all published Students
exports.findAllPublished = (req, res) => {
    Student.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving students."
        });
      });
  };
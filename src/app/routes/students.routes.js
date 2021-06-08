module.exports = app => {
    const tutorials = require("../controllers/students.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Student
    router.post("/", tutorials.create);
  
    // Retrieve all Students
    router.get("/", tutorials.findAll);
  
    // Retrieve all published Students
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Student with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Student with id
    router.put("/:id", tutorials.update);
  
    // Delete a Student with id
    router.delete("/:id", tutorials.delete);
  
    // Create a new Student
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/students', router);
  };
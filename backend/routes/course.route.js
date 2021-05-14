const express = require('express');
const Course = require('../model/Course');
const app = express();
const courseRoute = express.Router();

// course model
let course = require('../model/Course');

// Add course
courseRoute.route('/create-course').post((req, res, next) => {
    Course.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all course
courseRoute.route('/courses').get((req, res) => {
    Course.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// // Get single courses
// coursesRoute.route('/read-courses/:id').get((req, res) => {
//   courses.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


// Update courses
courseRoute.route('/courses/:id').put((req, res, next) => {
  Course.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('course successfully updated!')
    }
  })
})

// Delete course
courseRoute.route('/courses/:id').delete((req, res, next) => {
    Course.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = courseRoute;
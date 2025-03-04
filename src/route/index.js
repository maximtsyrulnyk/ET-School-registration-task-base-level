const express = require('express')
const router = express.Router()
const hbs = require('hbs')

router.get('/', function (req, res, next) {
  res.render('index')
})

router.get('/1', function (req, res, next) {
  res.render('1-var', {
    name: 'Dima',
  })
})

router.get('/2', function (req, res, next) {
  res.render('2-with', {
    user: {
      name: 'Dima',
    },
    role: 'Admin',
  })
})

router.get('/bootstrap', function (req, res, next) {
  res.render('bootstrap', {
    layout: 'bootstrap',
  })
})

router.get('/register', function (req, res, next) {
  res.render('register', {
    layout: 'register',
  })
})

router.get('/view', function (req, res, next) {
  res.render('view', {
    layout: 'view',
  })
})

module.exports = router

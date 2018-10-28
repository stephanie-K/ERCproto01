const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// P1 form ***********************************************************************************

router.post('/forms/education/postcode', function (req, res) {
    // Get the answer from the query string
    var postcode = req.session.data['postcode']
    res.redirect('/forms/education/postcode-with-address')
  })


  router.post('/forms/education/parent-name', function (req, res) {
    res.redirect('/forms/education/phone')
  })

  router.post('/forms/education/phone', function (req, res) {
    res.redirect('/forms/education/email')
  })

  router.post('/forms/education/email', function (req, res) {
    res.redirect('/forms/education/single')
  })

  router.post('/forms/education/single', function (req, res) {
    res.redirect('/forms/education/child-name')
  })

  router.post('/forms/education/child-name', function (req, res) {
    res.redirect('/forms/education/child-dob')
  })

  router.post('/forms/education/child-dob', function (req, res) {
    res.redirect('/forms/education/child-gender')
  })

  router.post('/forms/education/child-gender', function (req, res) {
    res.redirect('/forms/education/nursery')
  })

  router.post('/forms/education/nursery', function (req, res) {
    res.redirect('/forms/education/denominational-or-non')
  })

  router.post('/forms/education/denominational-or-non', function (req, res) {
    res.redirect('/forms/education/medical')
  })

  router.post('/forms/education/medical', function (req, res) {
    var medicalNeeded = req.session.data['medical']
    if (medicalNeeded === 'yes') {
        return res.redirect('/forms/education/medical-details')
    }
    //clear the data in case the user came back to that page and had previously given more details
    req.session.data['medical-details'] = null;
    res.redirect('/forms/education/school-2nd')
  })

  router.post('/forms/education/medical-details', function (req, res) {
    res.redirect('/forms/education/school-2nd')
  })

  router.post('/forms/education/school-2nd', function (req, res) {
    res.redirect('/forms/education/defer')
  })

  router.post('/forms/education/defer', function (req, res) {
    res.redirect('/forms/education/sibling')
  })

  router.post('/forms/education/sibling', function (req, res) {
    var haveSibling = req.session.data['sibling']
    if (haveSibling === 'yes') {
        return res.redirect('/forms/education/sibling-name')
    }
    res.redirect('/forms/education/summary')
  })

  router.post('/forms/education/sibling-name', function (req, res) {
    return res.redirect('/forms/education/sibling-stage')
  })

  router.post('/forms/education/sibling-stage', function (req, res) {
    return res.redirect('/forms/education/summary')
  })
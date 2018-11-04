const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// P1 form ***********************************************************************************

router.post('/forms/education/moving', function (req, res) {
  // set a session variable to false: this will be used to see if we need to display the catchment school choice question or not
  req.session.nocag  = false
  // Get the answer from the query string
  var isMoving = req.session.data['moving']
  if (isMoving === 'yes') {
    return res.redirect('/forms/education/postcode-start-term')
  }
  res.redirect('/forms/education/postcode')
})

router.post('/forms/education/postcode-start-term', function (req, res) {
  res.redirect('/forms/education/postcode-current')
})

router.post('/forms/education/postcode-current', function (req, res) {
  res.redirect('/forms/education/manual-catchment-school')
})

router.post('/forms/education/manual-catchment-school', function (req, res) {
  // set a session variable so we know if we need to display the catchment school choice question or not
  req.session.nocag = true 
  res.redirect('/forms/education/parent-name')
})


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
    res.redirect('/forms/education/defer')
  })

  router.post('/forms/education/defer', function (req, res) {
    if (req.session.nocag) {
      return res.redirect('/forms/education/info')
    }
    res.redirect('/forms/education/denominational-or-non')
  })

  router.post('/forms/education/denominational-or-non', function (req, res) {
    //clear the data in case a user came back to that page who previously entered a manual catchment school choice
    req.session.data['catchment-school-manual'] = null
    res.redirect('/forms/education/info')
  })

  // info takes everyone to school-2nd - no POST for this view

  router.post('/forms/education/school-2nd', function (req, res) {
    res.redirect('/forms/education/sibling')
  })

  router.post('/forms/education/sibling', function (req, res) {
    var haveSibling = req.session.data['sibling']
    if (haveSibling === 'yes') {
        return res.redirect('/forms/education/sibling-name')
    }
    res.redirect('/forms/education/medical')
  })

  router.post('/forms/education/sibling-name', function (req, res) {
    return res.redirect('/forms/education/sibling-stage')
  })

  router.post('/forms/education/sibling-stage', function (req, res) {
    return res.redirect('/forms/education/medical')
  })

  router.post('/forms/education/medical', function (req, res) {
    var medicalNeeded = req.session.data['medical']
    if (medicalNeeded === 'yes') {
        return res.redirect('/forms/education/medical-details')
    }
    //clear the data in case the user came back to that page and had previously given more details
    req.session.data['medical-details'] = null;
    res.redirect('/forms/education/single')
  })

  router.post('/forms/education/medical-details', function (req, res) {
    res.redirect('/forms/education/single')
  })

  router.post('/forms/education/single', function (req, res) {
    var isSingle = req.session.data['single']
    if (isSingle=== 'yes') {
        return res.redirect('/forms/education/single-details')
    }
    //clear the data in case the user came back to that page and had previously given more details
    req.session.data['single-details'] = null;
    res.redirect('/forms/education/summary')
  })

  router.post('/forms/education/single-details', function (req, res) {
    res.redirect('/forms/education/summary')
  })



  
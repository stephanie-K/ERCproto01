const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// CBL form **********************************************************************************

router.post('/forms/housing/CBL16', function (req, res) {
  var is16 = req.session.data['is-16']
  if (is16 === 'yes') {
      return res.redirect('/forms/housing/CBLimmigration')
  }
  res.redirect('/forms/housing/CBLout')
})

router.post('/forms/housing/CBLrecourse', function (req, res) {
  var isrecourse = req.session.data['is-recourse']
  if (isrecourse === 'yes') {
      return res.redirect('/forms/housing/CBLout')
  }
  res.redirect('/forms/housing/CBLNI')
})

router.post('/forms/housing/CBLother-children', function (req, res) {
  var otherChidren = req.session.data['other-children']
  if (otherChidren === 'yes') {
      return res.redirect('/forms/housing/CBLadd-children')
  }
  res.redirect('/forms/housing/CBLinfo')
})

// P1 form ***********************************************************************************

// router.post('/forms/education/moving', function (req, res) {
//   // set a session variable to false: this will be used to see if we need to display the catchment school choice question or not
//   req.session.nocag  = false
//   // Get the answer from the query string
//   var isMoving = req.session.data['moving']
//   if (isMoving === 'yes') {
//     return res.redirect('/forms/education/postcode-start-term')
//   }
//   res.redirect('/forms/education/postcode')
// })

// router.post('/forms/education/postcode-start-term', function (req, res) {
//   res.redirect('/forms/education/postcode-current')
// })

// router.post('/forms/education/postcode-current', function (req, res) {
//   res.redirect('/forms/education/manual-catchment-school')
// })

// router.post('/forms/education/manual-catchment-school', function (req, res) {
//   // set a session variable so we know if we need to display the catchment school choice question or not
//   req.session.nocag = true 
//   res.redirect('/forms/education/parent-name')
// })


router.post('/forms/education/postcode', function (req, res) {
    // Get the answer from the query string
    //var postcode = req.session.data['postcode']
    res.redirect('/forms/education/postcode-with-address')
  })

  router.post('/forms/education/moving', function (req, res) {
    var isMoving = req.session.data['moving']
    if (isMoving === 'yes') {
        return res.redirect('/forms/education/current-address')
    }
      res.redirect('/forms/education/parent-name')
  })

  router.post('/forms/education/current-address', function (req, res) {
    res.redirect('/forms/education/moving-date')
  })

  router.post('/forms/education/moving-date', function (req, res) {
    res.redirect('/forms/education/parent-name')
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

  router.post('/forms/education/nursery1', function (req, res) {
    var nursery = req.session.data['nursery']
    if (nursery === 'My child is at a nursery but not in East Renfrewshire') {
        return res.redirect('/forms/education/nursery-name')
    }
    res.redirect('/forms/education/defer')
  })

  router.post('/forms/education/nursery-name', function (req, res) {
    res.redirect('/forms/education/defer')
  })


  router.post('/forms/education/defer', function (req, res) {
    // if (req.session.nocag) {
    //   return res.redirect('/forms/education/info')
    // }
    res.redirect('/forms/education/denominational-or-non')
  })

  router.post('/forms/education/denominational-or-non', function (req, res) {
    //clear the data in case a user came back to that page who previously entered a manual catchment school choice
    //req.session.data['catchment-school-manual'] = null
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

/////////////////// alternative version of the P1 enrollment form ///////////////////////////

  
router.post('/forms/education-alternative/moving', function (req, res) {
  // set a session variable to false: this will be used to see if we need to display the catchment school choice question or not
  req.session.nocag  = false
  // Get the answer from the query string
  var isMoving = req.session.data['moving']
  if (isMoving === 'yes') {
    return res.redirect('/forms/education-alternative/postcode-start-term')
  }
  res.redirect('/forms/education-alternative/postcode')
})

router.post('/forms/education-alternative/postcode-start-term', function (req, res) {
  res.redirect('/forms/education-alternative/postcode-current')
})

router.post('/forms/education-alternative/postcode-current', function (req, res) {
  res.redirect('/forms/education-alternative/manual-catchment-school')
})

router.post('/forms/education-alternative/manual-catchment-school', function (req, res) {
  // set a session variable so we know if we need to display the catchment school choice question or not
  req.session.nocag = true 
  res.redirect('/forms/education-alternative/parent-name')
})


router.post('/forms/education-alternative/postcode', function (req, res) {
    // Get the answer from the query string
    var postcode = req.session.data['postcode']
    res.redirect('/forms/education-alternative/postcode-with-address')
  })


  router.post('/forms/education-alternative/parent-name', function (req, res) {
    res.redirect('/forms/education-alternative/phone')
  })

  router.post('/forms/education-alternative/phone', function (req, res) {
    res.redirect('/forms/education-alternative/email')
  })

  router.post('/forms/education-alternative/email', function (req, res) {
    res.redirect('/forms/education-alternative/child-name')
  })

  router.post('/forms/education-alternative/child-name', function (req, res) {
    res.redirect('/forms/education-alternative/child-dob')
  })

  router.post('/forms/education-alternative/child-dob', function (req, res) {
    res.redirect('/forms/education-alternative/child-gender')
  })

  router.post('/forms/education-alternative/child-gender', function (req, res) {
    res.redirect('/forms/education-alternative/nursery')
  })

  router.post('/forms/education-alternative/nursery', function (req, res) {
    res.redirect('/forms/education-alternative/defer')
  })

  router.post('/forms/education-alternative/defer', function (req, res) {
    if (req.session.nocag) {
      return res.redirect('/forms/education-alternative/info')
    }
    res.redirect('/forms/education-alternative/denominational-or-non')
  })

  router.post('/forms/education-alternative/denominational-or-non', function (req, res) {
    //clear the data in case a user came back to that page who previously entered a manual catchment school choice
    req.session.data['catchment-school-manual'] = null
    res.redirect('/forms/education-alternative/info')
  })

  // info takes everyone to school-2nd - no POST for this view

  router.post('/forms/education-alternative/school-2nd', function (req, res) {
    res.redirect('/forms/education-alternative/sibling')
  })

  router.post('/forms/education-alternative/sibling', function (req, res) {
    var haveSibling = req.session.data['sibling']
    if (haveSibling === 'yes') {
        return res.redirect('/forms/education-alternative/sibling-name')
    }
    res.redirect('/forms/education-alternative/medical')
  })

  router.post('/forms/education-alternative/sibling-name', function (req, res) {
    return res.redirect('/forms/education-alternative/sibling-stage')
  })

  router.post('/forms/education-alternative/sibling-stage', function (req, res) {
    return res.redirect('/forms/education-alternative/medical')
  })

  router.post('/forms/education-alternative/medical', function (req, res) {
    var medicalNeeded = req.session.data['medical']
    if (medicalNeeded === 'yes') {
        return res.redirect('/forms/education-alternative/medical-details')
    }
    //clear the data in case the user came back to that page and had previously given more details
    req.session.data['medical-details'] = null;
    res.redirect('/forms/education-alternative/single')
  })

  router.post('/forms/education-alternative/medical-details', function (req, res) {
    res.redirect('/forms/education-alternative/single')
  })

  router.post('/forms/education-alternative/single', function (req, res) {
    var isSingle = req.session.data['single']
    if (isSingle=== 'yes') {
        return res.redirect('/forms/education-alternative/single-details')
    }
    //clear the data in case the user came back to that page and had previously given more details
    req.session.data['single-details'] = null;
    res.redirect('/forms/education-alternative/summary')
  })

  router.post('/forms/education-alternative/single-details', function (req, res) {
    res.redirect('/forms/education-alternative/summary')
  })
const express = require('express')
const router = express.Router()
const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
// Add your routes here - above the module.exports line

// Patterns *********************************************************************************

router.post('/patterns/add-to-a-list/person1-name', function (req, res) {
  var first1 = req.session.data['first-name-person1']
  var last1 = req.session.data['last-name-person1']
  if (first1) {
    if (last1) {
      return res.redirect('/patterns/add-to-a-list/person1-dob')
    }
      return res.redirect('/patterns/add-to-a-list/person1-name-nolast')
  }
  if (last1) {
    return res.redirect('/patterns/add-to-a-list/person1-name-nofirst')
  }
  res.redirect('/patterns/add-to-a-list/person1-name-nofirst-nolast')
})

router.post('/patterns/add-to-a-list/person1-name-nofirst', function (req, res) {
  var first1 = req.session.data['first-name-person1']
  var last1 = req.session.data['last-name-person1']
  if (first1) {
    if (last1) {
      return res.redirect('/patterns/add-to-a-list/person1-dob')
    }
      return res.redirect('/patterns/add-to-a-list/person1-name-nolast')
  }
  if (last1) {
    return res.redirect('/patterns/add-to-a-list/person1-name-nofirst')
  }
  res.redirect('/patterns/add-to-a-list/person1-name-nofirst-nolast')
})

router.post('/patterns/add-to-a-list/person1-name-nolast', function (req, res) {
  var first1 = req.session.data['first-name-person1']
  var last1 = req.session.data['last-name-person1']
  if (first1) {
    if (last1) {
      return res.redirect('/patterns/add-to-a-list/person1-dob')
    }
      return res.redirect('/patterns/add-to-a-list/person1-name-nolast')
  }
  if (last1) {
    return res.redirect('/patterns/add-to-a-list/person1-name-nofirst')
  }
  res.redirect('/patterns/add-to-a-list/person1-name-nofirst-nolast')
})

router.post('/patterns/add-to-a-list/person1-name-nofirst-nolast', function (req, res) {
  var first1 = req.session.data['first-name-person1']
  var last1 = req.session.data['last-name-person1']
  if (first1) {
    if (last1) {
      return res.redirect('/patterns/add-to-a-list/person1-dob')
    }
      return res.redirect('/patterns/add-to-a-list/person1-name-nolast')
  }
  if (last1) {
    return res.redirect('/patterns/add-to-a-list/person1-name-nofirst')
  }
  res.redirect('/patterns/add-to-a-list/person1-name-nofirst-nolast')
})

router.post('/patterns/add-to-a-list/person1-dob', function (req, res) {
  res.redirect('/patterns/add-to-a-list/person1-gender')
})

router.post('/patterns/add-to-a-list/person1-gender', function (req, res) {
  res.redirect('/patterns/add-to-a-list/person1-relationship')
})

router.post('/patterns/add-to-a-list/person1-relationship', function (req, res) {
  res.redirect('/patterns/add-to-a-list/person1-summary')
})

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
  res.redirect('/forms/housing/CBLlegal')
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

router.post('/forms/education/declaration', function (req, res) {
  var agrees= req.session.data['declaration']
  if (agrees === 'yes') {
    req.session.data['declaration'] = null; // clear the value
      return res.redirect('/forms/education/postcode')
  } else {
    if (agrees === 'no') {
      req.session.data['declaration'] = null; // clear the value
      return res.redirect('/forms/education/out')
    }
  }
    res.redirect('/forms/education/declaration-error')
})

router.post('/forms/education/declaration-error', function (req, res) {
  var agrees= req.session.data['declaration']
  if (agrees === 'yes') {
    req.session.data['declaration'] = null; // clear the value
      return res.redirect('/forms/education/postcode')
  } else {
    if (agrees === 'no') {
      req.session.data['declaration'] = null; // clear the value
      return res.redirect('/forms/education/out')
    }
  }
    res.redirect('/forms/education/declaration-error')
})

router.post('/forms/education/declaration1', function (req, res) {
  var declaration1= req.session.data['declaration1']
  if (declaration1 
    && declaration1.includes('dec1') 
    && declaration1.includes('dec2') 
    && declaration1.includes('dec3') 
    && declaration1.includes('dec4'))  {
      req.session.data['declaration1'] = null; // clear the value
    return res.redirect('/forms/education/postcode')
  }
    res.redirect('/forms/education/declaration1-error')
})

router.post('/forms/education/declaration1-error', function (req, res) {
  var declaration1= req.session.data['declaration1']
  if (declaration1 
    && declaration1.includes('dec1') 
    && declaration1.includes('dec2') 
    && declaration1.includes('dec3') 
    && declaration1.includes('dec4'))  {
      req.session.data['declaration1'] = null; // clear the value
    return res.redirect('/forms/education/postcode')
  }
    res.redirect('/forms/education/declaration1-error')
})

router.post('/forms/education/postcode', function (req, res) {
    // Get the answer from the query string
    var postcode = req.session.data['postcode']
    if (postcode === 'error') {
      return res.redirect('/forms/education/postcode-error')
  }
    res.redirect('/forms/education/postcode-with-address')
  })

  router.post('/forms/education/postcode-error', function (req, res) {
    res.redirect('/forms/education/postcode-with-address')
  })

router.post('/forms/education/postcode-js', function (req, res) {
  // Get the answer from the query string
  var postcode = req.session.data['postcode']
  if (postcode === 'error') {
    return res.redirect('/forms/education/postcode-error')
}
  res.redirect('/forms/education/postcode-with-address')
})

router.post('/forms/education/moving', function (req, res) {
  var isMoving = req.session.data['moving']
  if (isMoving === 'no') {
      return res.redirect('/forms/education/parent-name')
  }
    res.redirect('/forms/education/current-address')
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
    if (nursery === 'Another nursery') {
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
    res.redirect('/forms/education/school-1st')
  })

  router.post('/forms/education/school-1st', function (req, res) {
    //clear the data in case a user came back to that page who previously entered a manual catchment school choice
    //req.session.data['catchment-school-manual'] = null
    res.redirect('/forms/education/info')
  })

  router.post('/forms/education/sibling', function (req, res) {
    var haveSibling = req.session.data['sibling']
    if (haveSibling === 'no') {
        return res.redirect('/forms/education/info-2nd-school')
    }
    res.redirect('/forms/education/sibling-stage')
  })

  router.post('/forms/education/sibling-stage', function (req, res) {
    return res.redirect('/forms/education/sibling-name')
  })

  router.post('/forms/education/sibling-name', function (req, res) {
    return res.redirect('/forms/education/school-2nd')
  })

  router.post('/forms/education/school-2nd', function (req, res) {
    res.redirect('/forms/education/medical')
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
    res.redirect('/forms/education/medical-evidence')
  })

  router.post('/forms/education/medical-evidence', function (req, res) {
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


  module.exports = router
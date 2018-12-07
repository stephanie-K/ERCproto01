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


// Members of household form *****************************************************************

router.post('/forms/housing/members-household/about-you', function (req, res) {
  res.redirect('/forms/housing/members-household/add-member1-loop')
})

router.post('/forms/housing/members-household/add-member1-loop', function (req, res) {
  var addMember1 = req.session.data['add-member1']
  if (addMember1 === 'no') {
      return res.redirect('/forms/housing/members-household/member1')
  }
  res.redirect('/forms/housing/members-household/confirmation')
})

router.post('/forms/housing/members-household/member1', function (req, res) {
  res.redirect('/forms/housing/members-household/add-member2-loop')
})

router.post('/forms/housing/members-household/add-member2-loop', function (req, res) {
  var addMember2 = req.session.data['add-member2']
  if (addMember2 === 'yes') {
      return res.redirect('/forms/housing/members-household/member2')
  }
  res.redirect('/forms/housing/members-household/confirmation')
})

router.post('/forms/housing/members-household/member2', function (req, res) {
  res.redirect('/forms/housing/members-household/add-member3-loop')
})

router.post('/forms/housing/members-household/add-member3-loop', function (req, res) {
  var addMember3 = req.session.data['add-member3']
  if (addMember3 === 'yes') {
      return res.redirect('/forms/housing/members-household/member3')
  }
  res.redirect('/forms/housing/members-household/confirmation')
})




// CBL form **********************************************************************************

router.post('/forms/housing/CBL16', function (req, res) {
  var is16 = req.session.data['is-16']
  if (is16 === 'no') {
      return res.redirect('/forms/housing/CBLout')
  }
  res.redirect('/forms/housing/CBLimmigration')
})

router.post('/forms/housing/CBLimmigration', function (req, res) {
  var immigrationControl = req.session.data['immigration']
  if (immigrationControl === 'no') {
      return res.redirect('/forms/housing/CBLNI')
  }
  res.redirect('/forms/housing/CBLrecourse')
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

router.post('/forms/housing/CBLaboutyou', function (req, res) {
  res.redirect('/forms/housing/CBLpostcode')
})

router.post('/forms/housing/CBLpostcode', function (req, res) {
  res.redirect('/forms/housing/CBLcontact')
})

router.post('/forms/housing/CBLcontact', function (req, res) {
  res.redirect('/forms/housing/CBLdob')
})

router.post('/forms/housing/CBLdob', function (req, res) {
  res.redirect('/forms/housing/CBLgender')
})

router.post('/forms/housing/CBLgender', function (req, res) {
  res.redirect('/forms/housing/CBLsummary-aboutyou')
})

router.post('/forms/housing/CBLinfo-housed', function (req, res) {
  var livingAlone= req.session.data['living-alone']
  if (livingAlone === 'yes') {
      return res.redirect('/forms/housing/CBLbabies')
  }
  res.redirect('/forms/housing/CBLadd-person1-loop')
})

router.post('/forms/housing/CBLadd-person1-loop', function (req, res) {
  res.redirect('/forms/housing/CBLperson1')
})

router.post('/forms/housing/CBLadd-person2-loop', function (req, res) {
  res.redirect('/forms/housing/CBLperson2')
})

router.post('/forms/housing/CBLadd-person3-loop', function (req, res) {
  res.redirect('/forms/housing/CBLperson3')
})

router.post('/forms/housing/CBLadd-person4-loop', function (req, res) {
  res.redirect('/forms/housing/CBLperson4')
})

router.post('/forms/housing/CBLadd-person5-loop', function (req, res) {
  res.redirect('/forms/housing/CBLperson5')
})


router.post('/forms/housing/CBLperson1', function (req, res) {
  var addPerson2 = req.session.data['add-person2']
  if (addPerson2 === 'yes') {
      return res.redirect('/forms/housing/CBLadd-person2-loop')
  }
  res.redirect('/forms/housing/CBLbabies')
})


router.post('/forms/housing/CBLperson2', function (req, res) {
  var addPerson3 = req.session.data['add-person3']
  if (addPerson3 === 'yes') {
      return res.redirect('/forms/housing/CBLadd-person3-loop')
  }
  res.redirect('/forms/housing/CBLbabies')
})

router.post('/forms/housing/CBLperson3', function (req, res) {
  var addPerson3 = req.session.data['add-person4']
  if (addPerson3 === 'yes') {
      return res.redirect('/forms/housing/CBLadd-person4-loop')
  }
  res.redirect('/forms/housing/CBLbabies')
})

router.post('/forms/housing/CBLperson4', function (req, res) {
  var addPerson3 = req.session.data['add-person5']
  if (addPerson3 === 'yes') {
      return res.redirect('/forms/housing/CBLadd-person5-loop')
  }
  res.redirect('/forms/housing/CBLbabies')
})

router.post('/forms/housing/CBL5yearsadd', function (req, res) {
  res.redirect('/forms/housing/CBLaddress1')
})

router.post('/forms/housing/CBLaddress1', function (req, res) {
  var addAddress2 = req.session.data['add-address2']
  var hasJoint = req.session.data['is-joint']  // =========================================================================
  if (addAddress2 === 'yes') {
      return res.redirect('/forms/housing/CBLaddress2-loop')
  }
  if (hasJoint === 'yes'){
    return res.redirect('/forms/housing/CBLjoint-info')
  }
  res.redirect('/forms/housing/CBLreasons')
})

router.post('/forms/housing/CBLaddress2-loop', function (req, res) {
  res.redirect('/forms/housing/CBLaddress2')
})

router.post('/forms/housing/CBLaddress2', function (req, res) {
  var addAddress2 = req.session.data['add-address3']
  if (addAddress2 === 'yes') {
      return res.redirect('/forms/housing/CBLaddress3-loop')
  }
  res.redirect('/forms/housing/CBLreasons')
})

router.post('/forms/housing/CBLaddress3-loop', function (req, res) {
  res.redirect('/forms/housing/CBLaddress3')
})

router.post('/forms/housing/CBLaddress3', function (req, res) {
  var addAddress2 = req.session.data['add-address4']
  if (addAddress2 === 'yes') {
      return res.redirect('/forms/housing/CBLaddress4-loop')
  }
  res.redirect('/forms/housing/CBLreasons')
})

router.post('/forms/housing/CBLaddress4-loop', function (req, res) {
  res.redirect('/forms/housing/CBLaddress4')
})

router.post('/forms/housing/CBLaddress4', function (req, res) {
  res.redirect('/forms/housing/CBLreasons')
})

router.post('/forms/housing/CBLjoint-info', function (req, res) {
  var sameAddresses = req.session.data['same-addresses']
  if (sameAddresses=== 'yes') {
      return res.redirect('/forms/housing/CBLreasons')
  }
  res.redirect('/forms/housing/CBL5yearsadd-joint')
})

router.post('/forms/housing/CBLextra-reason-medical1', function (req, res) {
  var medical = req.session.data['medical']
  if (medical === 'yes') {
      return res.redirect('/forms/housing/CBLextra-reason-medical2')
  }
  res.redirect('/forms/housing/CBLextra-reason-abuse')
})

router.post('/forms/housing/CBLextra-reason-abuse', function (req, res) {
  var abuse = req.session.data['abuse']
  if (abuse === 'yes') {
      return res.redirect('/forms/housing/CBLextra-reason-police')
  }
  res.redirect('/forms/housing/CBLhouse-type')
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
    //regular expression for email validation:
    var RFC5322 = /^[a-zA-Z0-9=*!$&_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var emailAdd = req.session.data['email']
    if (emailAdd) { 
      if (!RFC5322.test(emailAdd)) {
        // the email is not the right format
        return res.redirect('/forms/education/email-not-valid')
      } 
      //email is provided and valid format
      return res.redirect('/forms/education/child-name')
    }
    // email field is empty
    res.redirect('/forms/education/email-needed')
  })

  router.post('/forms/education/email-not-valid', function (req, res) {
    //regular expression for email validation:
    var RFC5322 = /^[a-zA-Z0-9=*!$&_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var emailAdd = req.session.data['email']
    if (emailAdd) { 
      if (!RFC5322.test(emailAdd)) {
        // the email is not the right format
        return res.redirect('/forms/education/email-not-valid')
      } 
      //email is provided and valid format
      return res.redirect('/forms/education/child-name')
    }
    // email field is empty
    res.redirect('/forms/education/email-needed')
  })

  router.post('/forms/education/email-needed', function (req, res) {
    //regular expression for email validation:
    var RFC5322 = /^[a-zA-Z0-9=*!$&_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var emailAdd = req.session.data['email']
    if (emailAdd) { 
      if (!RFC5322.test(emailAdd)) {
        // the email is not the right format
        return res.redirect('/forms/education/email-not-valid')
      } 
      //email is provided and valid format
      return res.redirect('/forms/education/child-name')
    }
    // email field is empty
    res.redirect('/forms/education/email-needed')
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
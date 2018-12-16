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


// Equality and diversity form *****************************************************************

router.post('/forms/equal-opportunities/age', function (req, res) {
  var age = req.session.data['age']
  if (age === '0-15') {
      return res.redirect('/forms/equal-opportunities/religion')
  }
  res.redirect('/forms/equal-opportunities/status')
})

// Amendment form *****************************************************************

router.post('/forms/housing/amendment/name', function (req, res) {
  res.redirect('/forms/housing/amendment/contact')
})

router.post('/forms/housing/amendment/contact', function (req, res) {
  res.redirect('/forms/housing/amendment/housing-details')
})

router.post('/forms/housing/amendment/housing-details', function (req, res) {
  res.redirect('/forms/housing/amendment/menu')
})

router.post('/forms/housing/amendment/menu', function (req, res) {
  var what = req.session.data['what']
  if (what === 'name') {
      return res.redirect('/forms/housing/amendment/name-change')
  }
  if (what === 'address') {
    return res.redirect('/forms/housing/amendment/address-change')
}
if (what === 'add') {
  return res.redirect('/forms/housing/amendment/add-change')
}
  res.redirect('/forms/housing/amendment/remove-change')
})

router.post('/forms/housing/amendment/change-more', function (req, res) {
  var moreChange = req.session.data['more-change']
  if (moreChange === 'yes') {
      return res.redirect('/forms/housing/amendment/menu')
  }
  res.redirect('/forms/housing/amendment/declaration')
})

router.post('/forms/housing/amendment/name-change', function (req, res) {
  res.redirect('/forms/housing/amendment/change-more')
})

router.post('/forms/housing/amendment/address-change', function (req, res) {
  res.redirect('/forms/housing/amendment/change-more')
})

router.post('/forms/housing/amendment/add-change', function (req, res) {
  res.redirect('/forms/housing/amendment/change-more')
})

router.post('/forms/housing/amendment/remove-change', function (req, res) {
  res.redirect('/forms/housing/amendment/remove-change-more1')
})

router.post('/forms/housing/amendment/remove-change-more1', function (req, res) {
  var removeMore1 = req.session.data['remove-more1']
  if (removeMore1=== 'yes') {
      return res.redirect('/forms/housing/amendment/remove-change1')
  }
  res.redirect('/forms/housing/amendment/change-more')
})

router.post('/forms/housing/amendment/remove-change1', function (req, res) {
  res.redirect('/forms/housing/amendment/remove-change-more2')
})

router.post('/forms/housing/amendment/remove-change-more2', function (req, res) {
  var removeMore1 = req.session.data['remove-more2']
  if (removeMore1=== 'yes') {
      return res.redirect('/forms/housing/amendment/remove-change2')
  }
  res.redirect('/forms/housing/amendment/change-more')
})

// Medical Priority form *****************************************************************

router.post('/forms/housing/medical/physical', function (req, res) {
  var hasPhysicalIssue = req.session.data['physical']
  if (hasPhysicalIssue === 'no') {
      return res.redirect('/forms/housing/medical/mental')
  }
  res.redirect('/forms/housing/medical/physical-details')
})

router.post('/forms/housing/medical/mental', function (req, res) {
  var hasMentalIssue = req.session.data['mental']
  var hasPhysicalIssue = req.session.data['physical']
  if (hasMentalIssue === 'no') {
    if (hasPhysicalIssue === 'no') {
      return res.redirect('/forms/housing/medical/grounds-info')
    }
      return res.redirect('/forms/housing/medical/medication')
  }
  res.redirect('/forms/housing/medical/mental-details')
})

router.post('/forms/housing/medical/medication', function (req, res) {
  var hasMedic = req.session.data['medic']
  if (hasMedic === 'no') {
      return res.redirect('/forms/housing/medical/benefits')
  }
  res.redirect('/forms/housing/medical/medication-details')
})

router.post('/forms/housing/medical/benefits', function (req, res) {
  var hasBenefit = req.session.data['benefit']
  if (hasBenefit === 'no') {
      return res.redirect('/forms/housing/medical/disabled')
  }
  res.redirect('/forms/housing/medical/benefits-details')
})

router.post('/forms/housing/medical/support', function (req, res) {
  var hasBenefit = req.session.data['support']
  if (hasBenefit === 'no') {
      return res.redirect('/forms/housing/medical/accommodation')
  }
  res.redirect('/forms/housing/medical/support-details')
})

router.post('/forms/housing/medical/declaration', function (req, res) {
  var declaration = req.session.data['declaration']
  if (declaration && declaration.includes('has-read') 
)  {
    return res.redirect('/forms/housing/medical/confirmation')
  }
    res.redirect('/forms/housing/medical/declaration-error')
})

router.post('/forms/housing/medical/declaration-error', function (req, res) {
  var declaration = req.session.data['declaration']
  if (declaration && declaration.includes('has-read') 
)  {
    return res.redirect('/forms/housing/medical/confirmation')
  }
    res.redirect('/forms/housing/medical/declaration-error')
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

router.post('/forms/housing/CBLdeclaration2', function (req, res) {
  var declaration = req.session.data['declaration2']
  if (declaration && declaration.includes('has-read') 
)  {
    return res.redirect('/forms/housing/CBL16')
  }
    res.redirect('/forms/housing/CBLdeclaration2-error')
})

router.post('/forms/housing/CBLdeclaration2-error', function (req, res) {
  var declaration = req.session.data['declaration2']
  if (declaration && declaration.includes('has-read') 
)  {
    return res.redirect('/forms/housing/CBL16')
  }
    res.redirect('/forms/housing/CBLdeclaration2-error')
})


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
      return res.redirect('/forms/housing/CBLhomeless-question')
  }
  res.redirect('/forms/housing/CBLrecourse')
})

router.post('/forms/housing/CBLrecourse', function (req, res) {
  var isrecourse = req.session.data['is-recourse']
  if (isrecourse === 'yes') {
      return res.redirect('/forms/housing/CBLout')
  }
  res.redirect('/forms/housing/CBLhomeless-question')
})

router.post('/forms/housing/CBLhomeless-question', function (req, res) {
  var homeless = req.session.data['homeless']
  if (homeless=== 'yes') {
      return res.redirect('/forms/housing/CBLhomeless')
  }
  res.redirect('/forms/housing/CBLaddress')
})

router.post('/forms/housing/CBLaddress', function (req, res) {
  res.redirect('/forms/housing/CBLNI')
})

router.post('/forms/housing/CBLNI', function (req, res) {
  res.redirect('/forms/housing/CBLaboutyou')
})

router.post('/forms/housing/CBLaboutyou', function (req, res) {
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

router.post('/forms/housing/CBLwho-moving', function (req, res) {
  res.redirect('/forms/housing/CBLinfo-housed')
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

router.post('/forms/housing/CBLperson1', function (req, res) {
  var addPerson2 = req.session.data['add-person2']
  if (addPerson2 === 'yes') {
      return res.redirect('/forms/housing/CBLadd-person2-loop')
  }
  res.redirect('/forms/housing/CBLbabies')
})

router.post('/forms/housing/CBLadd-person2-loop', function (req, res) {
  res.redirect('/forms/housing/CBLperson2')
})

router.post('/forms/housing/CBLperson2', function (req, res) {
  var addPerson3 = req.session.data['add-person3']
  if (addPerson3 === 'yes') {
      return res.redirect('/forms/housing/CBLadd-person3-loop')
  }
  res.redirect('/forms/housing/CBLbabies')
})

router.post('/forms/housing/CBLadd-person3-loop', function (req, res) {
  res.redirect('/forms/housing/CBLperson3')
})


router.post('/forms/housing/CBLperson3', function (req, res) {
  res.redirect('/forms/housing/CBLbabies')
})

router.post('/forms/housing/CBLbabies', function (req, res) {
  res.redirect('/forms/housing/CBLjoint')
})


router.post('/forms/housing/CBLjoint', function (req, res) {
  res.redirect('/forms/housing/CBLother-children')
})

router.post('/forms/housing/CBLother-children', function (req, res) {
  var otherChidren = req.session.data['other-children']
  if (otherChidren === 'yes') {
      return res.redirect('/forms/housing/CBLadd-child1-loop')
  }
  res.redirect('/forms/housing/CBLcurrent-address')
})

router.post('/forms/housing/CBLadd-child1-loop', function (req, res) {
  res.redirect('/forms/housing/CBLchild1')
})

router.post('/forms/housing/CBLchild1', function (req, res) {
  var addPerson2 = req.session.data['add-child2']
  if (addPerson2 === 'yes') {
      return res.redirect('/forms/housing/CBLadd-child2-loop')
  }
  res.redirect('/forms/housing/CBLcurrent-address')
})

router.post('/forms/housing/CBLadd-child2-loop', function (req, res) {
  res.redirect('/forms/housing/CBLchild2')
})

router.post('/forms/housing/CBLchild2', function (req, res) {
  res.redirect('/forms/housing/CBLcurrent-address')
})

router.post('/forms/housing/CBL5yearsadd-question', function (req, res) {
  var addAddress = req.session.data['add-address']
  var hasJoint = req.session.data['is-joint']
  if (addAddress === 'yes') {
      return res.redirect('/forms/housing/CBL5yearsadd')
  }
  if (hasJoint === 'yes'){
    return res.redirect('/forms/housing/CBLjoint-info')
  }
  res.redirect('/forms/housing/CBLlegal')
})

router.post('/forms/housing/CBL5yearsadd', function (req, res) {
  res.redirect('/forms/housing/CBLaddress1')
})

router.post('/forms/housing/CBLaddress1', function (req, res) {
  var addAddress2 = req.session.data['add-address2']
  var hasJoint = req.session.data['is-joint']
  if (addAddress2 === 'yes') {
      return res.redirect('/forms/housing/CBLaddress2-loop')
  }
  if (hasJoint === 'yes'){
    return res.redirect('/forms/housing/CBLjoint-info')
  }
  res.redirect('/forms/housing/CBLlegal')
})

router.post('/forms/housing/CBLaddress2-loop', function (req, res) {
  res.redirect('/forms/housing/CBLaddress2')
})

router.post('/forms/housing/CBLaddress2', function (req, res) {
  var hasJoint = req.session.data['is-joint']
  if (hasJoint === 'yes'){
    return res.redirect('/forms/housing/CBLjoint-info')
  }
  res.redirect('/forms/housing/CBLlegal')
})

router.post('/forms/housing/CBLjoint-info', function (req, res) {
  var sameAddresses = req.session.data['same-addresses']
  if (sameAddresses=== 'yes') {
      return res.redirect('/forms/housing/CBLlegal')
  }
  res.redirect('/forms/housing/CBL5yearsadd-joint')
})

router.post('/forms/housing/CBL5yearsadd-joint', function (req, res) {
  res.redirect('/forms/housing/CBLaddress1-joint')
})

router.post('/forms/housing/CBLaddress1-joint', function (req, res) {
  var addAddress2Joint = req.session.data['add-address2-joint']
  if (addAddress2Joint === 'yes') {
      return res.redirect('/forms/housing/CBLaddress2-loop-joint')
  }
  res.redirect('/forms/housing/CBLlegal')
})

router.post('/forms/housing/CBLaddress2-loop-joint', function (req, res) {
  res.redirect('/forms/housing/CBLaddress2-joint')
})

router.post('/forms/housing/CBLaddress2-joint', function (req, res) {
  res.redirect('/forms/housing/CBLlegal')
})

router.post('/forms/housing/CBLbedroom', function (req, res) {
  var notMoving = req.session.data['who-not-moving']
  if (notMoving === 'yes') {
      return res.redirect('/forms/housing/CBLbedroom-used')
  }
  res.redirect('/forms/housing/CBLreasons')
})

router.post('/forms/housing/CBLdeclaration1', function (req, res) {
  var know = req.session.data['know-erc']
  if (know === 'yes') {
      return res.redirect('/forms/housing/CBLdeclaration1-details')
  }
  res.redirect('/forms/housing/CBLextra-reason-abuse')
})

router.post('/forms/housing/CBLextra-reason-medical', function (req, res) {
  res.redirect('/forms/housing/CBLend')
})


// P1 form ***********************************************************************************

router.post('/forms/education/declaration1', function (req, res) {
  var declaration1= req.session.data['declaration1']
  if (declaration1 
    && declaration1.includes('dec1') 
    && declaration1.includes('dec2') 
    && declaration1.includes('dec3'))  {
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
    && declaration1.includes('dec3'))  {
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
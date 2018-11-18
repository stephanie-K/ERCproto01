/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


// --------------------------------------------  CBL ------------------------------------------------- //

function showperson2 () {
  $('#CBLperson2').show();
  $('#addbutton1').hide();
}
function showperson3 () {
  $('#CBLperson3').show();
}
function showperson4 () {
  $('#CBLperson4').show();
}
function showperson5 () {
  $('#CBLperson5').show();
}
function showperson6 () {
  $('#CBLperson6').show();
}

function showchild2 () {
  $('#CBLchild2').show();
  $('#addbutton2').hide();
}
function showchild3 () {
  $('#CBLchild3').show();
}

function hideperson2 () {
  $('#CBLperson2').hide();
  $('#addbutton1').show();
}
function hideperson3 () {
  $('#CBLperson3').hide();
}
function hideperson4 () {
  $('#CBLperson4').hide();
}
function hideperson5 () {
  $('#CBLperson5').hide();
}
function hideperson6 () {
  $('#CBLperson6').hide();
}

function hidechild2 () {
  $('#CBLchild2').hide();
  $('#addbutton2').show();
}
function hidechild3 () {
  $('#CBLchild3').hide();
}
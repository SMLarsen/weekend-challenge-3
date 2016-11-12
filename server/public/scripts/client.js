var inputArray = [];
var compRequest = {};
var calcType = "";
var pathString = "";

$(document).ready(function() {
    console.log("document ready");

    $('.operator').on('click', function (event){
      event.preventDefault();
      console.log(1, $(this).attr("name").toLowerCase());
      calcType = $(this).attr("name").toLowerCase();
      buildCompRequest(calcType);
      putRequest();
    });

    $('#equal-btn').on('click', function (event){
      event.preventDefault();
      calcType = $(this).attr("value").toLowerCase();
      buildCompRequest(calcType);
      putRequest();
    });

    $('#clear-btn').on('click', function (event){
      event.preventDefault();
      clearInput();
    });

    function buildCompRequest(calcType) {
      inputArray = $(".calc-form").serializeArray();
      inputArray.forEach(function (element, index, array) {
        compRequest[element.name] = element.value;
      });
      compRequest.type = calcType;
      console.log(compRequest);
    }

    function putRequest() {
      $.ajax({
          type: 'POST',
          url: '/calc',
          data: compRequest,
          success: function(data) {
            getResponse();
            console.log("Success - POST /calc/add");
          },
          error: function(){
            console.log("Error - POST /calc/add");
          }
      });
    }

    function getResponse() {
      $.ajax({
          type: 'GET',
          url: '/calc',
          success: function(data) {
            displayResult(data);
            console.log("Success - GET /calc/add");
          },
          error: function(){
            console.log("Error - GET /calc/add");
          }
      });
    }

    function displayResult(result) {
      $('#result').text(result.value);
    }

    function clearInput() {
      console.log("clear");
      $('.input-number').val("");
    }


});

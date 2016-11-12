var inputArray = [];
var compRequest = {};
var calcType = "";
var pathString = "";
var num = "";
var x = 0;
var y = 0;

$(document).ready(function() {
    console.log("document ready");

    $('.input-number').on('click', function (event){
      event.preventDefault();
      console.log($(this).attr("name"));
      num += $(this).attr("name");
      console.log(num);
    });

    $('.operator').on('click', function (event){
      event.preventDefault();
      compRequest.x = num;
      calcType = $(this).attr("name").toLowerCase();
      compRequest.type = calcType;
      num = 0;
      console.log(compRequest);
    });

    $('#equals-btn').on('click', function (event){
      event.preventDefault();
      compRequest.y = num;
      console.log(compRequest);
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
      $('#result').text("");
      $('.input-number').val("");
      compRequest.x = 0;
      compRequest.y = 0;
      compRequest.type = '';
      console.log(compRequest);
    }


});

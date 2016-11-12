var inputArray = [];
var compRequest = {};
var calcType = "";
var pathString = "";
var num = "";
var x;
var y;

$(document).ready(function() {
    console.log("document ready");

    $('.input-number').on('click', function (event){
      event.preventDefault();
      var currResult = $('#result').text();
      if (currResult !== "") {
        num = $(this).attr("name");
        $('#result').text("");
      } else {
        num += $(this).attr("name");
      }
    });

    $('.operator').on('click', function (event){
      event.preventDefault();
      compRequest.x = num;
      calcType = $(this).attr("name").toLowerCase();
      compRequest.type = calcType;
      num = "";
    });

    $('#equals-btn').on('click', function (event){
      event.preventDefault();
      compRequest.y = num;
      putRequest(compRequest);
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
    }

    function putRequest() {
      pathString = '/calc/' + calcType;
      $.ajax({
          type: 'POST',
          url: pathString,
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
            console.log('result:', data.value);
            compRequest.x = data.value;
            num = data.value;
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
      num = "";
      compRequest.x = "";
      compRequest.y = "";
      compRequest.type = '';
      console.log(compRequest);
    }


});

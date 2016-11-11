var inputArray = [];
var compRequest = {};
var calcType = "";
var pathString = "";

$(document).ready(function() {
    console.log("document ready");

    $('#add-btn').on('click', function (event){
      event.preventDefault();
      calcType = $(this).attr("value").toLowerCase();
      buildCompRequest(calcType);
      putAddRequest();
    });

    function buildCompRequest(calcType) {
      inputArray = $(".calc-form").serializeArray();
      inputArray.forEach(function (element, index, array) {
        compRequest[element.name] = element.value;
      });
      compRequest.type = calcType;
      console.log(compRequest);
    }

    function putAddRequest() {
      pathString = '/calc/' + calcType;
      $.ajax({
          type: 'POST',
          url: pathString,
          data: compRequest,
          success: function(data) {
            putGetRequest();
            console.log("Success - POST /calc/add");
          },
          error: function(){
            console.log("Error - POST /calc/add");
          }
      });
    }

        function putGetRequest() {
          pathString = '/calc/' + calcType;
          $.ajax({
              type: 'GET',
              url: pathString,
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

});

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

      pathString = '/calc/' + calcType;

      console.log(compRequest);
      $.ajax({
          type: 'POST',
          url: pathString,
          data: compRequest,
          success: function(data) {
            console.log("Success - POST /calc");
          },
          error: function(){
            console.log("Error - POST /calc");
          }
      });

    });




    function buildCompRequest(calcType) {
      inputArray = $(".calc-form").serializeArray();

      inputArray.forEach(function (element, index, array) {
        compRequest[element.name] = element.value;
      });

      compRequest.type = calcType;
      console.log(compRequest);
    }


});

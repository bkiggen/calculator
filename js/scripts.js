//Backend Logic

var add = function(number1, number2) {
  return (number1 + number2).toFixed(5).replace(/0+$/, "");
};
var subtract = function(number1, number2) {
  return (number1 - number2).toFixed(5).replace(/0+$/, "");
};
var divide = function(number1, number2) {
  return (number1 / number2).toFixed(5).replace(/0+$/, "");
};
var multiply = function(number1, number2) {
  return (number1 * number2).toFixed(5).replace(/0+$/, "");
};


//Front End Logic

$(document).ready(function(event){
  $("#add").click(function(){
    $("form#math").submit(function(event) {

      event.preventDefault();
      var number1 = parseFloat($("#math1").val());
      var number2 = parseFloat($("#math2").val());
      var result = add(number1, number2);

      function comma(result){
        return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

      if (result%1 === 0){
        var intResult = comma(result);
        var intResult2 = intResult.replace(/\./, "");
        $("#output").text(intResult2);
      } else {
        $("#output").text(comma(result));
      }
    });
  });

  $("#subtract").click(function(){
    $("form#math").submit(function(event) {
      event.preventDefault();
      var number1 = parseFloat($("#math1").val());
      var number2 = parseFloat($("#math2").val());
      var result = subtract(number1, number2);

      function comma(result){
        return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

      if (result%1 === 0){
        var intResult = comma(result);
        var intResult2 = intResult.replace(/\./, "");
        $("#output").text(intResult2);
      } else {
        $("#output").text(comma(result));
      }
    });
  });

  $("#multiply").click(function(){
    $("form#math").submit(function(event) {
      event.preventDefault();
      var number1 = parseFloat($("#math1").val());
      var number2 = parseFloat($("#math2").val());
      var result = multiply(number1, number2);
      function comma(result){
        return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

      if (result%1 === 0){
        var intResult = comma(result);
        var intResult2 = intResult.replace(/\./, "");
        $("#output").text(intResult2);
      } else {
        $("#output").text(comma(result));
      }
    });
  });

  $("#divide").click(function(){
    $("form#math").submit(function(event) {
      event.preventDefault();
      var number1 = parseFloat($("#math1").val());
      var number2 = parseFloat($("#math2").val());
      var result = divide(number1, number2);
      function comma(result){
        return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

      if (result%1 === 0){
        var intResult = comma(result);
        var intResult2 = intResult.replace(/\./, "");
        $("#output").text(intResult2);
      } else {
        $("#output").text(comma(result));
      }
    });
  });
});

//Backend Logic

var add = function(number1, number2) {
  return (number1 + number2).toFixed(5);
};
var subtract = function(number1, number2) {
  return (number1 - number2).toFixed(5);
};
var divide = function(number1, number2) {
  return (number1 / number2).toFixed(5);
};
var multiply = function(number1, number2) {
  return (number1 * number2).toFixed(5);
};


//Front End Logic

$(document).ready(function(){
  $("form#math").submit(function(event) {
    event.preventDefault();

    var number1 = parseFloat($("#math1").val());
    var number2 = parseFloat($("#math2").val());

    $("#add").click(function(){
      var result = add(number1, number2);
      $("#output").text(result);
    });

    $("#subtract").click(function(){
      var result = subtract(number1, number2);
      $("#output").text(result);
    });

    $("#multiply").click(function(){
      var result = multiply(number1, number2);
      $("#output").text(result);
    });

    $("#divide").click(function(){
      var result = divide(number1, number2);
      $("#output").text(result);
    });

  });
});

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
    $("#add").click(function(){
      var number1 = parseFloat($("#math1").val());
      var number2 = parseFloat($("#math2").val());
      var result = add(number1, number2);
      $("#output").text(result);
    });
  });

  $("form#math").submit(function(event) {
    event.preventDefault();
    $("#subtract").click(function(){
      var number1 = parseFloat($("#math1").val());
      var number2 = parseFloat($("#math2").val());
      var result = subtract(number1, number2);
      $("#output").text(result);
    });
  });

  $("form#math").submit(function(event) {
    event.preventDefault();
    $("#multiply").click(function(){
      var number1 = parseFloat($("#math1").val());
      var number2 = parseFloat($("#math2").val());
      var result = multiply(number1, number2);
      $("#output").text(result);
    });
  });

  $("form#math").submit(function(event) {
    event.preventDefault();
    $("#divide").click(function(){
      var number1 = parseFloat($("#math1").val());
      var number2 = parseFloat($("#math2").val());
      var result = divide(number1, number2);
      $("#output").text(result);
    });
  });
});

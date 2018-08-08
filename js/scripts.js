//Backend Logic

var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};


//Front End Logic

$(document).ready(function(){
  $("form#math #add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#math1").val());
    var number2 = parseInt($("#math2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
});

$(document).ready(function(){
  $("form#math #subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#math1").val());
    var number2 = parseInt($("#math2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });
});

$(document).ready(function(){
  $("form#math #multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#math1").val());
    var number2 = parseInt($("#math2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });
});

$(document).ready(function(){
  $("form#math #divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#math1").val());
    var number2 = parseInt($("#math2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });
});

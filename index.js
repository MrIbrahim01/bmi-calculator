document.querySelectorAll('input[type="checkbox"]')[0].addEventListener('click', function(){
    document.querySelectorAll('input[type="checkbox"]')[0].checked = true;
    var cm = $('.cm');
    var kg = $('.kg');
    cm.attr("placeholder", "cm");
    kg.attr("placeholder", "kg");
    document.querySelectorAll('input[type="checkbox"]')[1].checked = false;
});
document.querySelectorAll('input[type="checkbox"]')[1].addEventListener('click', function(){
    document.querySelectorAll('input[type="checkbox"]')[1].checked = true;
    var cm = $('.cm');
    var kg = $('.kg');
    cm.attr("placeholder", "in");
    kg.attr("placeholder", "lb");
    document.querySelectorAll('input[type="checkbox"]')[0].checked = false;
});

function answer(){


if(($('input#metric').prop("checked")) == true){
    var height = $('#height');
    var weight = $('#weight');
    heightInMeter = height.val()/100;
    var ans = (weight.val() / (heightInMeter * heightInMeter)).toFixed(1);
   
}
else if(($('input#imperial').prop("checked")) == true){
    var height = $('#height');
    var weight = $('#weight');
    heightInMeter = height.val() / 39.37;
    var sol = weight.val() / height.val();
    var ans = ((sol / height.val()) * 703).toFixed(1);
   

}
return ans;
}
function idealWeight(){


if(($('input#metric').prop("checked")) == true){
    var weightUnit = "kg";
    var height = $('#height');
    var weight = $('#weight');
    heightInMeter = height.val()/100;
    var ans = (weight.val() / (heightInMeter * heightInMeter)).toFixed(1);
    var idealWeight = (ans * (heightInMeter * heightInMeter)).toFixed(2);

}
else if(($('input#imperial').prop("checked")) == true){
    var weightUnit = "lb"
    var height = $('#height');
    var weight = $('#weight');
    heightInMeter = height.val() / 39.37;
    var sol = weight.val() / height.val();
    var ans = ((sol / height.val()) * 703).toFixed(1);
    var idealWeight = (2.2 * ans + (3.5*ans) * heightInMeter - 1.5).toFixed(2);


}
return idealWeight + weightUnit;
}
function healthy(BMI){


if(BMI < 18.5){
    var healthy = "under weight";
} 
// else if(BMI == 18.5){
//     var healthy = "healthy weight";
// }
else if(BMI >= 18.5 && BMI < 24.9){
    var healthy = "healthy weight";
}
else if(BMI >= 24.9 && BMI < 29.9 ){
    var healthy = "overweight";
}
else if(BMI >= 29.9){
    var healthy = "obese weight";
}
return healthy;
}
$(".my-btn").on("click", function(){
    $(".btn-heading").text("Your BMI Is...");
    $(".btn-para").css("fontSize" , "2.5rem");
    $(".btn-para").css("fontWeight" , "700");
    $(".btn-para").text(answer());
    $(".btn-para2").html("Your BMI suggests you have a " + healthy(answer()) + ".");
    // Your ideal weight is " + `<strong>${idealWeight()}.</strong>`
    // $(".ideal-weight").text(idealWeight());
    

})
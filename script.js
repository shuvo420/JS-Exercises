/* JavaScript code here */
//task 1
console.log("external js");
//task 2
function sumArray (arr){
    var sum =0;
    arr.forEach(function(value, index){
        sum += value;
    });
    return sum;
}
console.log(sumArray([1,2,3,4,5]));
console.log(sumArray([19,-2,30,-45]));
//task 3
function checkEmail(emailString){
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var match =emailFormat.test(emailString);
    return match;
}
console.log(checkEmail("jonn@smith.com"));
console.log(checkEmail("jonnsmith.info"));

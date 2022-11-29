function StudentGenrator(score,total){
    let average = (score/total)*100
    let marks =''

    // the average of a student if scored 
if( average >=0 && average <= 39){
    console.log("Grade E.");
}else if (average >=40 &&average<= 49){
    console.log("Grade D");
}else if (average >= 50 && average <=59){
    console.log("Grade c")
}else if (average>=60 && average <=79){
    console.log("Grade B")
}else if( average>=80 && average<=100){
    console.log ("Grade A")
} else {
    console.log ("input not recognized") //the end of the function
}
 
}
StudentGenrator(1000,100) 

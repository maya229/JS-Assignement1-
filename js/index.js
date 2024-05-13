// 1- Write a program that allow to user enter number then printit
// Example
// Input: 5
// Output: 5

// Answer
// var userInput = prompt("Enter a number:");
// var nb = parseInt(userInput);
// console.log("Output:", nb);


// 2- Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no
// Example1
// Input: 12 Output Yes
// Example 2
// Input: 9 Output No

// Answer
// var userInput = prompt("Enter a number:");
// var nb = parseInt(userInput);
// if(nb%3==0 && nb%4==0){
//     console.log("yes");
// }else{
//     console.log("No");
// }

// 3- Write a program that allows the user to insert 2 integers then print the max
// Example1
// Input: 3 5
// Output: 5
// Example 2
// Input: 10 7
// Output: 10

// Answer
// var firstNumber = prompt("Enter first number:");
// var nb1 = parseInt(firstNumber);
// var secondNumber = prompt("Enter second number:");
// var nb2 = parseInt(secondNumber);
// if(nb1>nb2){
//     console.log("Max: "+nb1);
// }else{
//     console.log("Max: "+nb2);
// }

// Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.
// Example 1
// Input: -5
// Output negative
// Example2
// Input: 10
// Output positive

// Answer
// var userInput = prompt("Enter a number:");
// var nb = parseInt(userInput);
// if(nb<0){
//     console.log("negative");
// }else{
//     console.log("positive");
// }

// 5- Write a program that take 3 integers from user then print the max element
// and the min element.
// Example 1
// Input:7,8,5
// Output:
// max element = 8
// min element = 5
// Example2
// Input: 3 6 9
// Outputs:
// Max element = 9
// Min element = 3

// Answer
// var firstNumber = prompt("Enter first number:");
// var nb1 = parseInt(firstNumber);
// var secondNumber = prompt("Enter second number:");
// var nb2 = parseInt(secondNumber);
// var thirdNumber = prompt("Enter third number:");
// var nb3 = parseInt(thirdNumber);
// var numbers = [nb1, nb2, nb3];
// var maxNumber = numbers[0];
// var minNumber = numbers[0];
// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] > maxNumber) {
//         maxNumber = numbers[i];
//     }
//     if (numbers[i] < minNumber) {
//         minNumber = numbers[i];
//     }
// }
// console.log("max element:", maxNumber);
// console.log("Min element:", minNumber);

// 6- Write a program that allows the user to insert integer number then
// check If a number is oven or odd
// Example 1
// Input: 8
// Output: even
// Example 2
// Input: 7
// Output: odd

// Answer
// var userInput = prompt("Enter a number:");
// var nb = parseInt(userInput);
// if(nb%2==0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant
// Example1
// Input: O
// Output: vowel
// Example 2
// Input: b
// Output:
// Consonant

// Answer
// var userInput = prompt("Enter a character:");
// if(userInput==='a'||userInput==='e'||userInput==='I'||userInput==='o'||userInput==='u'){
//     console.log("vowel");
// }else{
//     console.log("consonant");
// }

// 9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to
// that’s number
// Example Input 5
// Output 1, 2, 3, 4, 5

// Answer
// var userInput = prompt("Enter a number:");
// var nb = parseInt(userInput);
// for(var i=0; i<nb;i++){
//     console.log(i+1);
// }

// 10- Write a program that allows userto insert integerthen print a multiplication table up to 12.
// Example
// Input: 5
// Outputs:
// 5 10 15 20 25 30 35 40 45 50 55 60

// Answer
// var userInput = prompt("Enter a number:");
// var nb = parseInt(userInput);
// for(var i=0; i<12;i++){
//     console.log(nb*(i+1));
// }

// 11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
// between 1 to this number
// Example:
// Input: 15
// Output: 2 4 6 8 10 12 14

// Answer
// var userInput = prompt("Enter a number:");
// var nb = parseInt(userInput);
// for(var i=1; i<=nb;i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

// 12- Writeaprogramthattaketwointegersthenprintthepower
// Example:
// Input: 4 3
// Output: 64
// Hint how to calculate 4^3 = 4 * 4 * 4 =64

// Answer
// var firstNumber = prompt("Enter first number:");
// var nb1 = parseInt(firstNumber);
// var secondNumber = prompt("Enter second number:");
// var nb2 = parseInt(secondNumber);
// var sum= 1;
// for(var i=0; i<nb2; i++){
//     sum*=nb1;
// }
// console.log(sum);

// 12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.
// Example
// Input: - Enter Marks of five subjects:
// 95
// 76
// 58
// 90
// 89
// Output:-.Total marks = 435
// Average Marks =87
// Percentage =87

// Answer
// var subject1 = prompt("Enter subject1:");
// var sub1 = parseInt(subject1);
// var subject2 = prompt("Enter subject2:");
// var sub2 = parseInt(subject2);
// var subject3 = prompt("Enter subject3:");
// var sub3 = parseInt(subject3);
// var subject4 = prompt("Enter subject4:");
// var sub4 = parseInt(subject4);
// var subject5 = prompt("Enter subject5:");
// var sub5 = parseInt(subject5);

// var subjects = [sub1, sub2, sub3, sub4, sub5];
// var total=0;
// for(var i=0; i<subjects.length; i++){
//     total+=subjects[i];
// }
// console.log(sub1, sub2, sub3, sub4, sub5);
// console.log("Total marks = "+total);
// var averageMarks=total/subjects.length;
// console.log("Total marks = "+averageMarks);
// var percentage=(total/(100*subjects.length))*100;
// console.log("Percentage = "+percentage +"%");

// 13-Write a program to input month number and print number of days in that
// month.
// Example:
// Input: - Month Number: 1
// Output:-. Days in Month: 31

// Answer
// var userInput = prompt("Enter a number:");
// var nb = parseInt(userInput);
// if(nb==1){
//     console.log("Days in Month: 31");
// }else if(nb==2){
//     console.log("Days in Month: 29");
// }else if(nb==3){
//     console.log("Days in Month: 31");
// }else if(nb==4){
//     console.log("Days in Month: 30");
// }else if(nb==5){
//     console.log("Days in Month: 31");
// }else if(nb==6){
//     console.log("Days in Month: 30");
// }else if(nb==7){
//     console.log("Days in Month: 31");
// }else if(nb==8){
//     console.log("Days in Month: 31");
// }else if(nb==9){
//     console.log("Days in Month: 30");
// }else if(nb==10){
//     console.log("Days in Month: 31");
// }else if(nb==11){
//     console.log("Days in Month: 30");
// }else if(nb==12){
//     console.log("Days in Month: 31");
// }else{
//     console.log("Out of range");
// }

// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F

// Answer
// var subject1 = prompt("Enter subject1:");
// var sub1 = parseInt(subject1);
// var subject2 = prompt("Enter subject2:");
// var sub2 = parseInt(subject2);
// var subject3 = prompt("Enter subject3:");
// var sub3 = parseInt(subject3);
// var subject4 = prompt("Enter subject4:");
// var sub4 = parseInt(subject4);
// var subject5 = prompt("Enter subject5:");
// var sub5 = parseInt(subject5);

// var total= sub1+sub2+sub3+sub4+sub5;
// var percentage = (total / 500) * 100;

// if(percentage>= 90){
//     console.log("Grad A");
// }else if(percentage >= 80){
//     console.log("Grad B");
// }else if(percentage >= 70){
//     console.log("Grad C");
// }else if(percentage >= 60){
//     console.log("Grad D");
// }else if(percentage >= 40){
//     console.log("Grad E");
// }else{
//     console.log("Grad F");
// }

// 15- Write a program to print total number of days in month

// Answer
// var userInput = prompt("Enter a number:");
// var nb = parseInt(userInput);
// switch(nb){
//     case 1:
//         console.log("Days in Month: 31");
//     break;
//     case 2:
//         console.log("Days in Month: 29");
//     break;
//     case 3:
//         console.log("Days in Month: 31");
//     break;
//     case 4:
//         console.log("Days in Month: 30");
//     break;
//     case 5:
//         console.log("Days in Month: 31");
//     break;
//     case 6:
//         console.log("Days in Month: 30");
//     break;
//     case 7:
//         console.log("Days in Month: 31");
//     break;
//     case 8:
//         console.log("Days in Month: 31");
//     break;
//     case 9:
//         console.log("Days in Month: 30");
//     break;
//     case 10:
//         console.log("Days in Month: 31");
//     break;
//     case 11:
//         console.log("Days in Month: 30");
//     break;
//     case 12:
//         console.log("Days in Month: 31");
//     break;
//     default:
//         console.log("Out of range");
//     break;    

// }

// 16- Write a program to check whether an alphabet is vowel or consonant
// Answer
// var userInput = prompt("Enter a character:");
// switch(userInput){
//     case 'a':
//     case 'e':
//     case 'I':
//     case 'o':
//     case 'u':
//         console.log("vowel");
//     break; 
//     default:
//         console.log("consonant");
//     break;       
// }

// 17- Write a program to find maximum between two numbers
// Answer
// var firstNumber = prompt("Enter first number:");
// var nb1 = parseInt(firstNumber);
// var secondNumber = prompt("Enter second number:");
// var nb2 = parseInt(secondNumber);
// switch(nb1>nb2){
//     case true:
//         console.log("maximum value :"+ nb1);
//     break;
//     default:
//         console.log("maximum value :"+ nb2);  
//     break;      
// }

// 18- Write a program to check whether a number is even or odd
// Answer
// var userInput = prompt("Enter a number:");
// var nb = parseInt(userInput);
// switch(nb%2==0){
//     case true:
//         console.log("Even");
//         break;
//     default :
//     console.log("Odd");
//         break;    
// }

// 19- Write a program to check whether a number is positive or negative or zero
// Answer
// var userInput = prompt("Enter a number:");
// var nb = parseInt(userInput);
// switch(true){
//     case (nb>0):
//         console.log("Positive");
//         break;
//     case (nb<0):
//         console.log("Negative");
//         break;
//     default :
//     console.log("Zero");
//         break;    
// }

// 20- Write a program to create Simple Calculator
// Answer
// var firstNumber = prompt("Enter first number:");
// var nb1 = parseInt(firstNumber);
// var secondNumber = prompt("Enter second number:");
// var nb2 = parseInt(secondNumber); 
// var operation = prompt("Enter operation:");  
// var result=0
// switch(operation){
//     case '+' :
//         result=nb1+nb2;
//         console.log("addition :"+result);
//     break;
//     case '-':
//         result=nb1-nb2;
//         console.log("subtraction :"+result);
//         break;
//     case '*':
//         result=nb1*nb2;
//         console.log("multiplication :"+result);
//         break;
//     case '/':
//         if (nb2 !== 0) {
//             result=nb1/nb2;
//             console.log("division :"+result);
//         } else {
//             console.log("Error: Division by zero");
//         }
//         break;
//     default:
//         console.log("Error: Invalid operator"); 
//         break;   
// }    







var mark = prompt("Enter your mark from 0-100");

if(mark < 0){
   
   document.write("Enter a mark");
}
else if( mark <= 49){
    document.write("Sorry! You are Fail");  
}
else if( mark == 50 || mark <= 59 ){
    document.write("You got 'B'");    
}
else if( mark == 60 || mark <= 69 ){
    document.write("You got 'A-'");    
}
else if( mark == 70 || mark <= 79 ){
    document.write("You got 'A'");    
}
else if( mark == 80 || mark <= 100 ){
    document.write("You got 'A+'");    
}
else{
    document.write("Please enter a mark between 0-100");
}
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var d = date.getDate();
    var session = "";
    var month = date.getMonth();
    var year = date.getFullYear();
    var day = date.getDay();
    
    if(h<12){
        session = "Am";
    }
    else{
        session = "PM"
        h = h-12;
    }
    switch(day)
    {
        case 0 : day = "Sunday"
        break;
         case 1 : day = "Monday"
        break;
         case 2 : day = "Tuesday"
        break;
         case 3 : day = "Wednesday"
        break;
         case 4 : day = "Thursday"
        break;
         case 5 : day = "Saturday"
        break;
         case 6 : day = "Sunday";
    }
    switch(month)
    {
        case 0 : day = "Jan"
        break;
         case 1 : day = "Feb"
        break;
         case 2 : day = "March"
        break;
         case 3 : day = "April"
        break;
         case 4 : day = "May"
        break;
         case 5 : day = "June"
        break;
         case 6 : day = "July"
        break;
         case 7 : day = "Aug"
        break;
         case 8 : day = "Sept"
        break;
         case 9 : day = "Oct"
        break;
         case 10 : day = "Nov"
        break;
         case 11 : day = "Dec";
    }
    var watch= d + ":" + month + ":" + year + ": "+ day;
    console.log(watch);
    var time = h + ":" + m + ":" + s + ":" + session;
   console.log(time);
    
    setTimeout(showTime, 1000);
    
}

showTime();
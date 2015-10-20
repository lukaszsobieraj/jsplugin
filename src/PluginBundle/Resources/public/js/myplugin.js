$(document).ready(function () {
    
    
    //first plugin experience
    $.fn.power = function (x) {  
        return x*x;
    }
    console.log($(".change").power(6));
    
    //big and blue characters
    $.fn.bigBlue = function () {
        this.css("color", "blue");
        this.css("font-size", "20");
        
    }
    
    $(".change").bigBlue();
    
    
      //bigger and red characters
    $.fn.bigRed = function () {
        this.css("color", "red");
        this.css("font-size", "40");
        
    }
    
    $(".bigger").bigRed();
});
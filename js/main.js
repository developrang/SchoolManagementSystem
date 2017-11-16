$(document).ready(function(){
    var $screenWrapper = $('#screenWrapper');
    var $searchBtn = $('#searchBtn');    
    var $searchWrapper = $('#searchWrapper');
    var $createBtn = $('#createBtn');
    var $createNewWrapper = $('#createNewWrapper');
    var $lncfBackBtn = $('.lncfBackBtn');
    var $pInfo = $('#pInfo');
    var $popover = $('#popover');


    $searchBtn.click(function(){
        $('#screenWrapper').fadeIn();
        $searchWrapper.animate({left:'0px'});
    });

    $createBtn.click(function(){
        $('#screenWrapper').fadeIn();
        $createNewWrapper.animate({left:'0px'});
    });

    $lncfBackBtn.click(function(){
        $('#screenWrapper').fadeOut();
        $searchWrapper.animate({left:'-500px'});
        $createNewWrapper.animate({left:'-500px'});
    });

    $screenWrapper.click(function(){
         $lncfBackBtn.click();
    })

    $pInfo.click(function(event){
         event.preventDefault();
        if($popover.css('display') == 'none'){ 
            $popover.fadeIn(); 
            } else { 
            $popover.fadeOut(); 
        }
    });

   

    $(window).click(function(event){  
        if($(event.target).closest($pInfo).length){
            return false;
        }      
        else if($popover.is(':visible')){
            $popover.fadeOut();
        }     
    });

    

})
$(function(){
    //인터파크
    $("#interbox").mouseenter(function(){
        $("#interpark > li").stop().animate({marginTop:"-1150px"},8000)
    }).mouseleave(function(){
        $("#interpark > li").stop().animate({marginTop:"0px"},3000)
    })
    
    //Ecolife
    $("#Ecobox").mouseenter(function(){
        $("#Ecolife > li").stop().animate({marginTop:"-1150px"},8000)
    }).mouseleave(function(){
        $("#Ecolife > li").stop().animate({marginTop:"0px"},3000)
    })
    
    //Ferrano
    $("#Ferranobox").mouseenter(function(){
        $("#Ferrano > li").stop().animate({marginTop:"-1150px"},8000)
    }).mouseleave(function(){
        $("#Ferrano > li").stop().animate({marginTop:"0px"},3000)
    })
    
    //the sill
    $("#thesillbox").mouseenter(function(){
        $("#thesill > li").stop().animate({marginTop:"-1150px"},8000)
    }).mouseleave(function(){
        $("#thesill > li").stop().animate({marginTop:"0px"},3000)
    })
})
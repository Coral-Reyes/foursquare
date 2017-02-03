// JavaScript File
$(document).ready(function(){
    $("#Submit").click(function(){
        //alert("This works");
        var searchVal1= $("#address").val();
        var searchVal2= $("#foodtype").val();
        var part1= "https://api.foursquare.com/v2/venues/search?client_id=JIPRBMQEVEQULL1MBCTX0LOMI4I51E1MJLFMIXH5GOYNFOP1&client_secret=VFV05CVYSJ3AIV2LGII52YZS5EMQKDJ5T3031FIK1C2WROTE&v=20130815&near=";
        var url = part1 + searchVal1 + "&query=" +searchVal2;
        console.log(url);
        $.getJSON(url,function(response){
            var name= response.response.venues[0].name;
            var location= response.response.venues[0].location.formattedAddress[0];
            var number= response.response.venues[0].contact.formattedPhone;
            
            $("body").append(name + " ");
            $("body").append(location + " ");
            $("body").append(number);
        });
    });
});

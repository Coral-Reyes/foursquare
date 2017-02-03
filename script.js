// JavaScript File
$(document).ready(function(){
    $("#submit").click(function(){
        var searchVal1= $("#address").val();
        var searchVal2= $("#food-type").val();
        var part1= "https://api.foursquare.com/v2/venues/search?client_id=JIPRBMQEVEQULL1MBCTX0LOMI4I51E1MJLFMIXH5GOYNFOP1&client_secret=VFV05CVYSJ3AIV2LGII52YZS5EMQKDJ5T3031FIK1C2WROTE&v=20130815&near=";
        var url = part1 + searchVal1 + "&query=" +searchVal2;
        
        $.getJSON(url,function(response){
            var name= response.response.venues.name;
            var location= response.response.venues.location.formattedAddress;
            var number= response.response.venues.contact.formattedPhone;
            
            $("body").append(name + " ");
            $("body").append(location + " ");
            $("body").append(number);
        });
    });
});

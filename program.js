// overrideQueryString value and return it.
// MIT ryosuke matsukawa 20201227
function overrideQueryString(key, value) {
    var queryString = location.search ? location.search.substring(1).split("&") : [];
    if(queryString.length == 0)
        return;
    
    var queryStringNew = {};
    $.each(queryString, function(index, element){
        var item = element.split("=");
        if(item.length != 2)
            return true;
        
        if(item[0] == key)
            queryStringNew[item[0]] = value;
        else
            queryStringNew[item[0]] = item[1];
    });

    var newUrl = location.search ? location.href.replace(location.search, "") : location.href;
    var k = 0;
    for(var item in queryStringNew) {
        if(0 == k)
            newUrl += "?";
        if(0 < k)
            newUrl += "&";

        newUrl += item + "=" + queryStringNew[item];
        
        k++;
    };
    return newUrl;
}

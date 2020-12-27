# OverrideQueryString
Override Query String Value

+ Current request
> https://localhost/?param1=AAA&param2=BBB

+ Override Query String param1 from AAA to CCC like 
>https://localhost/?param1=CCC&param2=BBB

## Usage (jQuery)
>var newUrl = overrideQueryString("param1", "CCC");

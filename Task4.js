//http code
<!DOCTYPE html>
<html>
    <head><meta http-equiv="content-type"content="text/html";charset="utf-8"></head>
    <body>
        <script src="abc.js"></script>
    </body>
    </html>
    _____________________________________________________________________________________________________________
    
//script code:

1.Get all the countries from asia continent/region using filter function.

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function()
{
    var Countrydata = JSON.parse(this.response);
    var total=Countrydata.filter((country)=>{return country.region==="Asia";}).map((element)=>{return element.name})
console.log(total);
}
____________________________________________________________________________________________________________________

2.Get all the countries with population less than 2lakh using filter function.

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function()
{
    var Countrydata = JSON.parse(this.response);
    var total=Countrydata.filter((country)=>{return country.population <200000;}).map((element)=>{return element.name})
console.log(total);
}
____________________________________________________________________________________________________________________

3.print the following details Name,capital,flag using forEach function.

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function()
{
    var Countrydata = JSON.parse(this.response);
    var total=Countrydata.forEach((country)=> console.log( country.name+" "+country.capital+" "+country.flag));
    console.log(total);
}
____________________________________________________________________________________________________________________

4.print the total population of countries using reduce function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function()
{
    var population = JSON.parse(this.response);
    var total=population.reduce((acc,pop)=>{return acc+ pop.population},0);
console.log(total);
}
____________________________________________________________________________________________________________________

5.Print the countries which use US dollars as Currency.

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function()
{
    var Countrydata = JSON.parse(this.response);
    var output=Countrydata.filter((country)=>{return country.currencies[0].code==='USD';}).map((item)=>{return item.name})
    console.log(output);
}

                                 ************************
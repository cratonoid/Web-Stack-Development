angular.module("Packages",[]) //This is a module named as packages as under this module only everything will work and its also a view from MVC(model view controller)
.filter("namefilter",function()
{
    return function(input,option)
    {
        if(isNaN(option) ||(option == ""))
        {
            return input;
        }
        else
        {
        return input.substring(0,option).toUpperCase();
    }}
})
.controller("Packagesctrl",function($scope) //This works as a controller
{
    var items = [
        {name:'Alex',doa:new Date("February 02 2020"),location:"Karnataka",post:" Associate Analyst",stipend:"10000"},
        {name:'Negan',doa:new Date("June 03 2021"),location:"Maharashtra",post:" Quality Analyst",stipend:"15000"},
        {name:'Matthew',doa:new Date("March 10 2015"),location:"America",post:" Software Testing",stipend:"15000"},
        {name:'Donald',doa:new Date("November 15 2022"),location:"Africa",post:" Assistant Developer",stipend:"20000"},
        {name:'Raymond',doa:new Date("August 25 2018"),location:"Antartica",post:" Associate Analyst",stipend:"10000"},
       
        ];
    $scope.items = items;
    $scope.rowlimit = 5;
});

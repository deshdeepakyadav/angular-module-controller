//Controler defination 
var demoApp = angular.module('myapp',[]);

/*Method-1
function myController($scope)
{
$scope.customers=[
					{name:'Desh',location:'Delhi'},
					{name:'Amit',location:'Pune'},
					{name:'Deepak',location:'noida'}
				 ];
};
demoApp.controller('myAppController',myController);*/

/*Method-2*/
demoApp.controller('myAppController',function($scope){
$scope.customers=[
					{name:'Desh',location:'Delhi'},
					{name:'Amit',location:'Pune'},
					{name:'Deepak',location:'noida'}
				 ];
				 
$scope.add= function(){
					$scope.customers.push({'name':$scope.nameTxt,'location':$scope.locationTxt});
					$scope.nameTxt="";
					$scope.locationTxt="";
					
					  }

});

/*Method-3
var myController={};
myController.myAppController=function($scope){
$scope.customers=[
					{name:'Desh',location:'Delhi'},
					{name:'Amit',location:'Pune'},
					{name:'Deepak',location:'noida'}
				 ];
};
demoApp.controller(myController);*/
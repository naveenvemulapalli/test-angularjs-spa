var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function($routeProvider) {
	$routeProvider
		.when("/items", {
			templateUrl: "partials/itemlist.html",
			controller: "itemListCtrl"
		})
		.when("/cart", {
			templateUrl: "partials/cartlist.html",
			controller: "shopCartListCtrl"
		})
		.when("/advice", {
			templateUrl: "partials/advice.html",
			controller: "adviceCtrl"
		}).when("/contact", {
			templateUrl: "partials/contact.html",
			controller: "contactController"
		}).when("/home", {
			templateUrl: "partials/itemlist.html",
			controller: "itemListCtrl"
		}).otherwise({
		redirectTo: "/items"
	});
});

myApp.factory("cartService", function() {
	var cart = [];
	
	return {
		getCart: function() {
			return cart;
		},
		addToCart: function(item) {
			cart.push(item);
		},
		buy: function(item) {
			alert("Your order has been successfully placed for: " + item.name);
		}
	}
});

myApp.factory("itemService", function() {
	var items = [
		{
			imgUrl: "canonhr10.jpeg",
			name: "Canon HR 10",
			price: 199,
			type: "DVD",
			rating: 3,
			description: ""
		},
		{
			imgUrl: "canonhv20.jpeg",
			name: "Canon HV 20",
			price: 160,
			type: "HDV",
			rating: 5,
			description: ""
		},
		{
			imgUrl: "panasonicpvgs300.jpeg",
			name: "Panasonic PV GS 300",
			price: 125,
			type: "DV",
			rating: 5,
			description: ""
		},
		{
			imgUrl: "sonyhc96.jpeg",
			name: "Sony HC 96",
			price: 240,
			type: "DV",
			rating: 5,
			description: ""
		},
		{
			imgUrl: "sonyux5.jpeg",
			name: "Sony UX 5",
			price: 179,
			type: "DVD",
			rating: 2,
			description: ""
		}
	];
	
	return {
		getItems: function() {
			return items;
		},
		addToCart: function(item) {
			
		}
	}
});

myApp.controller("shopCartListCtrl", function($scope, cartService) {
	$scope.cart = cartService.getCart();
	
	$scope.buy = function(item) {		
		cartService.buy(item);
	}
});

myApp.controller("headerCtrl", function($scope, $location) {
	
	$scope.nav = {};
	$scope.nav.isActive = function(path) {
		if (path === $location.path()) {
			return true;
		}
		
		return false;
	}
});

myApp.controller("itemListCtrl", function($scope, itemService, cartService) {
	$scope.items = itemService.getItems();
	
	$scope.addToCart = function(item) {
		cartService.addToCart(item);
	}
});

myApp.controller("contactController", function($scope) {
    $scope.myFunc = function () {
        $scope.resultText = "Thank you for contacting us!";
    }
});

myApp.controller("adviceCtrl", function($scope) {

});
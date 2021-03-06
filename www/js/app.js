// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('ideaalCatering', ['ionic', 'ionizer-wooshop.controllers', 'ionizer-wooshop.services', 'common.services','ngIOS9UIWebViewPatch'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html',
                controller: 'BrowseCtrl'
            }
        }
    })

    .state('app.browse', {
        url: '/browse',
        views: {
            'menuContent': {
                templateUrl: 'templates/browse.html'
            }
        }
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'BrowseCtrl'
            }
        }
    })


    .state('app.pakketten', {
        url: '/pakketten',
        views: {
            'menuContent': {
                templateUrl: 'templates/pakketten.html',
                controller: 'BrowseCtrl'
            }
        }
    })

    .state('app.groepspakketten', {
            url: '/groepspakketten',
            views: {
                'menuContent': {
                    templateUrl: 'templates/groepspakketten.html',
                    controller: 'BrowseCtrl'
                }
            }
        })
        .state('app.drankarrangement', {
            url: '/drankarrangement',
            views: {
                'menuContent': {
                    templateUrl: 'templates/drankarrangement.html',
                    controller: 'BrowseCtrl'
                }
            }
        })

    .state('app.zelf-combineren', {
        url: '/zelf-combineren',
        views: {
            'menuContent': {
                templateUrl: 'templates/zelf-combineren.html',
                controller: 'BrowseCtrl'
            }
        }
    })

    .state('app.verhuurproducten', {
        url: '/verhuurproducten',
        views: {
            'menuContent': {
                templateUrl: 'templates/verhuurproducten.html',
                controller: 'BrowseCtrl'
            }
        }
    })

    .state('app.details', {
        url: '/details/:productID',
        views: {
            'menuContent': {
                templateUrl: 'templates/details.html',
                controller: 'BrowseDetailsCtrl'
            },
            'menuCart': {
                templateUrl: 'templates/winkelwagen.html',
                controller: 'CartCtrl'
            }

        }
    })


    .state('app.winkelwagen', {
        url: '/winkelwagen',
        views: {
            'menuContent': {
                templateUrl: 'templates/winkelwagen.html',
                controller: 'CartCtrl'
            }
        }
    })

    .state('app.over-ons', {
        url: '/over-ons',
        views: {
            'menuContent': {
                templateUrl: 'templates/over-ons.html',
            }
        }
    })

    .state('app.bbq-planner', {
        url: '/bbq-planner',
        views: {
            'menuContent': {
            templateUrl: 'templates/bbq-planner.html',
            }
        }
    })


    .state('app.contact', {
        url: '/contact',
        views: {
            'menuContent': {
                templateUrl: 'templates/contact.html',
            }
        }
    })


    .state('app.checkout', {
        url: '/checkout',
        views: {
            'menuContent': {
                templateUrl: 'templates/checkout.html',
                controller: 'CheckoutCtrl'
            }
        }
    })


    .state('app.thanks', {
        url: '/thanks',
        views: {
            'menuContent': {
                templateUrl: 'templates/thanks.html',
                controller: 'ThanksCtrl'
            }
        }
    })

    .state('app.hoe-werkt-het', {
        url: '/hoe-werkt-het',
        views: {
            'menuContent': {
                templateUrl: 'templates/hoe-werkt-het.html',
            }
        }
    })

    .state('app.account', {
        url: '/account',
        views: {
            'menuContent': {
                templateUrl: 'templates/account.html',
                controller: 'AccountCtrl'
            }
        }
    })

    .state('app.history', {
        url: '/history/:historyId',
        views: {
            'menuContent': {
                templateUrl: 'templates/history.html',
                controller: 'HistoryCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});

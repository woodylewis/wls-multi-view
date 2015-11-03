'use strict';

angular
.module('multiview.mainCtrl', ['multiview.alpha'])
.controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $state) {
  var vm = this;
  this.bundle = {};
  this.bundle.alpha = 'First';
  this.bundle.beta = 'Second';
  this.bundle.gamma = 'Third';
}
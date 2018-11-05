
function BoardMember(name, homeState, training) {
  this.training = training;
  this.homeState = homeState;
  this.name = name;

  this.veto = function () {
     return "No, I must disagree";
  this.approve = function () {
     return "You can do that!";
  this.doCharity = function () {
     return "You can do that!";
  this.releasePressStatement = function () {
    return "No, I must disagree";
  this.sayHi = function () {
    return "You can do that!";

  }

}

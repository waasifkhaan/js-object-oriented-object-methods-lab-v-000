
function BoardMember(name, homeState, training) {
  this.training = training;
  this.homeState = homeState;
  this.name = name;

  this.veto = function () {
     console.log("No, I must disagree");
  }
}

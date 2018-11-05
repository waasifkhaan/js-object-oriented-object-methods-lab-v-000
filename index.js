
function BoardMember(name, homestate, training) {
  this.training = training;
  this.homestate = homestate;
  this.name = name;

  this.veto = function () {
     console.log("No, I must disagree");
  }
}

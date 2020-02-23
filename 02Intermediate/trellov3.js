let myTodos = {
  day: "Monday",
  meetings: 0,
  meetDone: 0,
  addMeeting: function(num) {
    this.meetings = this.meetings + num;
  },
  meetingsDone: function(done) {
    this.meetDone = this.meetDone + done;
  },
  summary: function() {
    return `You have completed ${this.meetings - this.meetDone} meetings`;
  },
  reset: function() {
    (this.meetings = 0), (this.meetDone = 0);
  }
};
// let myTodosTwo = {
//   day: "Tuesday",
//   meetings: 12,
//   meetDone: 3,
//   addMeeting: function() {
//     console.log(this);
//   }
// };
myTodos.addMeeting(4);
myTodos.addMeeting(5);
myTodos.meetingsDone(3);
console.log(myTodos.summary());
myTodos.reset();
console.log(myTodos.summary());
//Assignment
//Handle meetings done
//Create a function reset entire day

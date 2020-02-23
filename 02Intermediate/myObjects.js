let myYoutubeVideoOne = {
  title: "Loops in Javascript",
  videoLength: 15,
  videoCreator: "Hitesh Choudhary",
  videoDescription: "This is a video description and a long one"
};
//console.log(myYoutubeVideoOne);
//console.log(  `Hey new video on ${myYoutubeVideoOne.title} by ${myYoutubeVideoOne.videoCreator}`);
//Assignmnet name,price,description
// let myNewCourse = {
//   courseName: "Javascript",
//   coursePrice: "Rs 899",
//   courseAuthor: "Hitesh Choudhary",
//   courseDescription: "Course description"
// };
// console.log(
//   `Hey new course on ${myNewCourse.courseName} by ${myNewCourse.courseAuthor} at only ${myNewCourse.coursePrice}`
// );
// myYoutubeVideoOne.title = "ForEach loop in JS";
// console.log(
//   `Hey new video on ${myYoutubeVideoOne.title} by ${myYoutubeVideoOne.videoCreator}`
// );
// console.log(myYoutubeVideo);
let myYoutubeVideoTwo = {
  title: "Functions in Javascript",
  videoLength: 10,
  videoCreator: "Hitesh Choudhary",
  videoDescription: "This is a video description and a long one"
};
let changeVideoLength = function(myObject) {
  return {
    formatOne: `Time of this video is ${myObject.videoLength + 2}`,
    formatTwo: `Time of this video is ${myObject.videoLength + 1}`
  };
};

let adOne = changeVideoLength(myYoutubeVideoTwo);
console.log(adOne.formatOne);

// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();
  // this.lineUp = false;


  // this.setPosition(this.top, this.left);????

};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // test out using a wrapper function here
  // lots of question on 'this' ^

};
// setTimeout(this.step what is the context within here???, this.timeBetweenSteps);

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
       top: top,
       left: left
     };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineup = function(){
  // this.lineUp = true;
  clearTimeout(this.$node.step);
  this.$node.animate(({left: "20px"}))

}

// Dancer.




// var makeDancer = function(top, left, timeBetweenSteps){
//   var dancer = {};
//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function(){
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };

//   dancer.step();

//   dancer.setPosition = function(top, left){
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

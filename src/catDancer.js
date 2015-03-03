var makeCatDancer = function(top, left, timeBetweenSteps){
  var catDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = catDancer.step;

  catDancer.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    catDancer.$node.css("background-color", "yellow" )
    catDancer.$node.toggle();
  };

  return catDancer;
};

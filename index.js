// Code your solution in this file!
/*
Initial street = 42nd street
Sometime the value might be negative eg, 34
Parameter = randomStreetNumber where we pick up passengers
*/

function distanceFromHqInBlocks (randomStreetNumber){
    const referencePoint = 42;
    return Math.abs ( randomStreetNumber - referencePoint);
}

function distanceFromHqInFeet (randomDistance){
    return Math.abs
    (distanceFromHqInBlocks(randomDistance)* 264);
} 

function distanceTravelledInFeet(start, destination){
    return Math.abs (start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
      return 0; 
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance < 2500) {
      return 25; 
    } else {
        return 'cannot travel that far'; }

    }   





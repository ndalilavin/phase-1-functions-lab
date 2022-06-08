// Code your solution in this file!

const scuberHQ = 42;

function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > 42) {
        return pickupLocation - scuberHQ;
    } else {
        return scuberHQ - pickupLocation;    
    }
}

function distanceFromHqInFeet (pickupLocation) {
    return (parseInt(distanceFromHqInBlocks(pickupLocation), 10) * 264);
}
    
function distanceTravelledInFeet(start, destination){
    return Math.abs((destination - start) * 264)
}

function calculatesFarePrice(start, destination){

    const distance = destination - start;
    
    const feet = Math.abs(distance) * 264;
    if (Math.abs(distance) === 1){
        return 0;
    }
    else if (feet <= 2000){
        return (Math.abs(feet) - 400) * 0.02;
    }
    else if (feet < 2500){
        return 25;
    }
    else if (feet > 2500){
        return 'cannot travel that far'
    }

}
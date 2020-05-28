class Dog {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.walkHistory = [];
        this.walkedDistance = 0;
    }

    speak() {
        console.log(`Woof! My name is ${this.name}`);
    }

    walk(location, distance) {
        //this.walkHistory.push([distance, location])
        //OR create an object (Mikes example)
        /*
        const theWalk = {
            walkLocation: location,
            walkDistance: distance
        }
        this.walkHistory.push(theWalk)
        */
        console.log(`Going for a ${distance}km walk at ${location}`)
        this.walkHistory.push(new Walk(location, distance))
        this.walkedDistance += distance
    }

    displayWalks() {
        /*
        for(let i=0; i < this.walkHistory.length; i++){
            console.log(`Location: ${this.walkHistory[i][1]} Distance: ${this.walkHistory[i][0]}`)
        }
        */

        //Mikes example
        //this.walkHistory.forEach( walk => console.log(`The dog walked at ${walk.walkLocation} for ${walk.walkDistance}km`))

        console.log(`Total distance walked is ${this.walkedDistance}km`)
        console.log(this.walkHistory)
    }

    totalDistance() {
        return this.walkedDistance
    }
}

class Walk {
    constructor(location, distance) {
      this.location = location;
      this.distance = distance;
      this.time = new Date;
    }
}

const newDog = new Dog("Billy", "Sydney")
newDog.speak()
newDog.walk("Bondi", 1)
newDog.walk("Coogee", 2)
newDog.displayWalks()
newDog.totalDistance()
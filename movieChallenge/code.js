class Movie {
    constructor(title, duration, rating){
        this.title = title
        this.duration = duration
        this.rating = rating
        //this.watchCount = 0
        //create an empty object
        this.watchCount = {}
    }

    getTotalWatchedCount(){
        let total = 0
        for(let email in this.watchedCount){
            total += this.watchedCount[email]
        }
        return total
    }

    printMovie() {
        console.log(`${this.title}, ${this.duration} minutes, rated ${this.rating}`)
        console.log(`Total movies watched: ${this.watchCount}`)
    }

    watch(user) {
        //this.watchCount += 1
        //console.log(user)
        //if the key exists in the object, increment, else set value to 1
        if(this.watchedCount[user.email]){
            this.watchedCount[user.email]++
        } else {
            this.watchedCount[user.email] = 1
        }
    }

}

class User {
    constructor(email, name){
        this.email = email
        this.name = name 
    }


}

//default should be to use const - unless you are absolutely sure it needs to change make it a const
const user1 = new User("admin@admin.com", "admin")
const myMovie = new Movie("Lord of the Rings", 300, 9.7)

myMovie.watch(user1)
const me = {
    age: 26,
    currentLocation: 'Sydney'
}

console.log(me.age);
console.log(me.currentLocation);

// adding new items to a JS object (like a Ruby hash)
// element[ yourKey ] = yourValue;
me['hobbies'] = ['running','cycling','trading'];

// deleting an item by key with JavaScript
delete me.age;

// loop through an object
// Method 1 - for...of - ECMAScript 6
for (const key of Object.keys(me)) {
    console.log(key, me[key]);
}

// Method 2 - Object.entries() - ECMAScript 8
Object.entries(me).forEach(
    ([key, value]) => console.log(key, value)
);

//Method 3 - combining for...of destructuring and Object.entries
for (const [key, value] of Object.entries(me)) {
    console.log(key, value);
}

//Method 4 - normal for loop
for(let i =0; i < me.hobbies.length; i++){
    console.log(me.hobbies[i])
}
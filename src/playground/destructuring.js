/* const person = {
    //name1: 'Andrew',
    age: 26,
    location: {
        city: 'Philly',
        temp: 92
    }
}

const {name1 = 'Anonymous', age} = person

console.log(`${name1} is ${age}`)

const {temp: temparature, city} = person.location
console.log(`It's ${temparature} in ${city}`)
 */

 /* const book = {
     title: 'Ego is the enemy',
     author: 'Ryan Holiday',
     publisher: {
        // name: 'Penguin'
     }
 }

 const {name: publisherName = 'Self-Publish'} = book.publisher
 console.log(publisherName)
 */

//const address = ['12299 S Juniper Street', 'Philly', 'Pennsylvania', '12312' ]

/*  const address = [, 'Phil' ]

 const [, city, state="Nevada"] = address

 console.log(city + ' ' + state) */

 const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75']
 const [name, , price] = item

 console.log(`A medium ${name} cost ${price}`)
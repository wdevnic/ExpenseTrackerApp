import React from 'react'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

// as takes named exports and add them as single variable
<script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js"></script>
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSEGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()
  const googleAuthProvider  = new firebase.auth.GoogleAuthProvider() 

  export  { firebase, googleAuthProvider, database as default}





 /*  database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
  })

  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
  })

  // prints all previously added children as well
  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
  }) */

  












/*   const notes = [{
    id: 12,
    title: 'First note',
    body: 'This is my note'
  },
  {
    id: 121,
    title: 'Second note',
    body: 'This is my second note'
  }]

  database.ref('notes').set(notes) */

/*   database.ref('notes').push({
    title: 'Course Topicsz',
    body: 'React, Angular, Python'
  }) */
/* 
  database.ref('expenses').push({
    description: 'Food',
    note: 'meat, veggies',
    amount: 200,
    createdAt: 1234567
  })

  database.ref('expenses').push({
    description: 'Rent',
    note: '-',
    amount: 900000,
    createdAt: 124441234567
  })

  database.ref('expenses').push({
    description: 'Bills',
    note: 'Water',
    amount: 34200,
    createdAt: 5551234567
  })
 */

/*   database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = []

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      })
    })
    console.log(expenses)
  }) */

  /* database.ref('expenses').on('value', (snapshot) => {
    
      const expenses = []
  
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      console.log(expenses)
    })
  
 */
 
  




/* 
  database.ref('location/city')
    .once('value')
    .then((snapshot) => {
      const val = snapshot.val()
      console.log(val)
    }) */

    // value is the event type
  /*   database.ref().on('value', (snapshot) => {
      const val = snapshot.val()
      console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
    })

    setTimeout(() => {
      database.ref('job/title').set('Senior Engineer')
    }, 3500) */

/*     const onValueChange = database.ref().on('value', (snapshot) => {
      console.log(snapshot.val())
    }, (e) => {
      console.log('Error with data fetching', e)
    })

    setTimeout(() => {
      database.ref('age').set(40)
    }, 3500)

    setTimeout(() => {
      database.ref().off(onValueChange)
    }, 7000)

    setTimeout(() => {
      database.ref('age').set(48)
    }, 10500) */



 /*   database.ref().set({
      name: 'David King',
      stressLvel: 4,
      job: {
          title: 'Software developer',
          company: 'Google'
      },
      isSingle: true,
      location: {
          city: 'Philidelphia',
          country: 'United States'
      }
  }).then(() => {
      console.log('Data is saved!')
  }).catch((e) => {
      console.log(e)
  }) 

database.ref().update({
  stressLvel: 2,
  'job/company': 'Amazon',
  'location/city': 'Seatle'
}) */
 
  //async calls
/*    database.ref('age').set(79);
  database.ref('location/city').set('New York') 

   database.ref('attributes').set({
      height: 60, 
      weight: 150 
    }).then(() => {
        console.log('DATA TATA')
    }).catch((error) => {
        console.log(error)
    })  */

/*  database.ref('isSingle').remove().then(() => {
    console.log('Data remove')
 }).catch(() => {

 })   */ 
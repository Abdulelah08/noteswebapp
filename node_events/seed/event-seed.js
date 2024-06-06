 const db = require('../config/database')
const Event = require('../models/Evnet')


let newEvents = [

    new Event({
        title: 'gaming fest',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'dubai',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'musical fest',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'riyadh',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'musical fest',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'tokyo',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'musical fest',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'Nizwa',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'musical fest',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'new york',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'musical fest',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'arar',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'musical fest',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'adan',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'musical fest',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'amman',
        date: Date.now(),
        created_at: Date.now()
    }),
    new Event({
        title: 'musical fest',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        location: 'jeddah',
        date: Date.now(),
        created_at: Date.now()
    }),
    
]

newEvents.forEach( (event)=> {
    event.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})
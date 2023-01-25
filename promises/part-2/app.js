console.log('testing')

// Part 2: Deck of Cards


// 1- Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).


        
let deck_id;
const shuffleCards= 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

// axios
//     .get(shuffleCards)
//     .then(res => {
//     console.log(res.data)
//     deck_id = res.data.deck_id
//     const drawCard = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
//     return axios.get(`${drawCard}`)
//     })
//     .then(res => {
//         let { value, suit } = res.data.cards[0]
//         console.log(`${value} of ${suit}`)
//     } )
//     .catch(err => {
//         console.log(err.code)
//     })


// 2- Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

// axios
//     .get(shuffleCards)
//     .then(res => {
//         // console.log(res.data)
//         deck_id = res.data.deck_id
//         const drawCard = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
//         return axios.get(`${drawCard}`)
//     })
//     .then(res => {
//         let { value, suit } = res.data.cards[0]
//         console.log(`${value} of ${suit}`)
//         return axios.get(`${drawCard}`)
//     })
//     .then(res => {
//         let { value, suit } = res.data.cards[0]
//         console.log(`${value} of ${suit}`)
//         return axios.get(`${drawCard}`)
//     })
    // .catch(err => {
    //     console.log(err.code)
    // })



// 3- Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

// Select form element that has a nested button used to let user draw a card
const form = document.querySelector('form')

// Select span element that the selected cards will be wrapped within
const showCard = document.querySelector('#show-card')

// when the page loads, an axios get request to get a shuffled deck of cards will be sent to the cards api. Then, a promise will be returned, a response executed and the id for the deck of cards will be stored in the 'deck_id' variable.
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    axios
        .get(shuffleCards)
        .then(res => {
            console.log(res.data)
            deck_id = res.data.deck_id
  });
})


// User clicks "Gimme a Card" button, which triggers an Axiox Get request to the deckofcardsapi and a promise is returned. The response is then executed and the value & suit of the card is saved as a variable. A new span with the value & suit of the card is created and the span is appended as a child of the "show-card" span. 
// *** having trouble with making the .catch method work so it is commented out for now ***
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log('the btn is working')
    const drawCard = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    axios
        .get(`${drawCard}`)
        .then(res => {
            let { value, suit } = res.data.cards[0]
            const card = document.createElement('span')
            card.innerText = `${value} of ${suit}`
            showCard.appendChild(card);
            return `${value} of ${suit}`
        });
        // .catch(err => {
        //     console.log(`Oops, there was a problem :( ${err}`);
        //   });
})
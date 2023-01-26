console.log('testing')

// Part 2: Deck of Cards


// 1- Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).


        
let deck_id;
const shuffleCards= 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

async function getCard() {
    const shuffledDeck = await axios.get(shuffleCards)

    deck_id = shuffledDeck.data.deck_id
  
    const drawCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
  
    const { value, suit } = drawCard.data.cards[0]
 

}
getCard()


// 2- Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.


async function getTwoCards() {
    const shuffledDeck = await axios.get(shuffleCards)

    deck_id = shuffledDeck.data.deck_id


    for (let i = 1; i <3; i++) {
        const drawFirstCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
        
        const { value, suit } = drawFirstCard.data.cards[0]
        console.log(`${value} of ${suit}`)
    }
}

getTwoCards()




// 3- Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

// Select form element that has a nested button used to let user draw a card
const form = document.querySelector('form')

// Select span element that the selected cards will be wrapped within
const showCard = document.querySelector('#show-card')


// Once the pages loads, the getNewDecOnLoad async function will send a get get request for a newly shuffled deck of cards and will store the 'deck_id' as a variable

window.addEventListener("load", getNewDeckOnLoad)

async function getNewDeckOnLoad() {
    let newDeck = await axios.get(shuffleCards)
    console.log(newDeck.data)
    deck_id = newDeck.data.deck_id
    console.log(deck_id)
}


// User clicks "Gimme a Card" button, which triggers an Axios Get request to the deckofcardsapi and a promise is returned. The response is then resolved and the value & suit of the card is saved as a variable. A new span with the value & suit of the card is created and the span is appended as a child of the "show-card" span. 



form.addEventListener("submit", drawOneCard)

async function drawOneCard(event) {
    try {
        event.preventDefault();
    console.log('the btn is working')
    const drawCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)

    let { value, suit } = drawCard.data.cards[0]
            const card = document.createElement('span')
            card.innerText = `${value} of ${suit}`
            showCard.appendChild(card);
            return `${value} of ${suit}`
    }
    catch(e) {
        console.log(e)
    }
}
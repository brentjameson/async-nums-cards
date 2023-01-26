console.log('testing')

const base_url = 'http://numbersapi.com'


// 1- Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API.

async function getFavoriteNumFact() {
    let favNum = await axios.get(`${base_url}/12`)
    console.log(favNum.data)
}

getFavoriteNumFact()


// 2- Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

const numFactsUl = document.querySelector('#numFacts')

async function getMultipleNumsFacts() {
    let { data } = await axios.get(`${base_url}/1..10?json`)
    for (let i = 1; i <=10; i++) {
        const fact = document.createElement('LI')
        fact.innerText = data[i]
        console.log(data[i])
        numFactsUl.append(fact);
    }
}
getMultipleNumsFacts()

    // 3 - Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

async function getFourFavNumFacts() {
    let f1Promise = axios.get(`${base_url}/12`)
    let f2Promise = axios.get(`${base_url}/12`)
    let f3Promise = axios.get(`${base_url}/12`)
    let f4Promise = axios.get(`${base_url}/12`)

    let f1 = await f1Promise
    let f2 = await f2Promise
    let f3 = await f3Promise
    let f4 = await f4Promise

    let fourNumFacts = [f1, f2, f3, f4];
    console.log(fourNumFacts[0].data)

    fourNumFacts.forEach((f) => {
        const num12Fact = document.createElement('LI');
        num12Fact.innerText = f.data;
        fourFacts.append(num12Fact);
    })
}

getFourFavNumFacts()
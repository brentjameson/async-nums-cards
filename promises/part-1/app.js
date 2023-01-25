console.log('testing')

const base_url = 'http://numbersapi.com'


// 1- Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API.

axios
    .get(`${base_url}/12`)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err.code)
    })


// 2- Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.


axios
    .get(`${base_url}/1..10?json`)
    .then(res => {
        // console.log(res.data)
        const numFactsUl = document.querySelector('#numFacts')
        const map = new Map(Object.entries(res.data));
        map.forEach(function(value, key) {
            // console.log(value);
            const fact = document.createElement('LI')
            fact.innerText = value;
            numFactsUl.append(fact);
        })
    })
    .catch(err => {
        console.log(err)
    })


    // 3 - Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

    let fourNumFacts = [];

    for (let i = 1; i < 5; i++) {
        fourNumFacts.push(axios.get(`${base_url}/12`)
        );
        const fourFacts = document.querySelector('#fourFacts')
    }

    Promise.all(fourNumFacts)
        .then(numFactsArr => (
            numFactsArr.forEach((f) => {
                const num12Fact = document.createElement('LI');
                num12Fact.innerText = f.data;
                fourFacts.append(num12Fact);
            })
        ))
        .catch(err => {
            console.log(err.code)
        })
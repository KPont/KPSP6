var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying",
    "Funny joke 2",
    "Unfunnyjoke 3"
];


var _getRandomJoke = jokes[(Math.random() * jokes.length | 0)];

function _addJoke(newJoke){
    jokes.push(newJoke);
}

module.exports = {
    allJokes : jokes,
    getRandomJoke : _getRandomJoke,
    addJoke : _addJoke
}

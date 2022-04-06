const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const tutorial = 'what does the this keyword mean?';

function titleCased() {
  let result = tutorial.map((curr, i, array) => {
    if (array[i - 1] == " ") {
      return array[i] = array[i].toUpperCase();
    } else {
      return array[i];
    }
  })
  console.log(result);
  return result;
};


/*function titleCased(){
  let array = []
  
  tutorials.map((outerString) => {
    let news = outerString.split(' ')
        .map(function(word) {
          return word.replace(word[0], word[0].toUpperCase());
        }).join(' ');
    array.push(news)
  })
  return array
}*/
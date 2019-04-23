const words = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 16;


let fullJustify = (words, maxWidth) => {
  let count = 0;
  let line = "";
  let answerArr = [];

  for(let i = 0; i < words.length; i++){
    // while(count <= 16){
    //   count += words[i].length + 1;
    //   line += words[i] + ' ';
    //   console.log(count);
    //   console.log(line);
    // }

    if(count + words[i].length + 1 <= 16){
      count += words[i].length + 1;
      line += words[i] + ' ';
      // console.log(count);
      answerArr.push(line);
      // console.log(line);
    }
  }

  return answerArr;

}



console.log(fullJustify(words, maxWidth));

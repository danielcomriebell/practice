var isValid = function(s){
  let stack = [];
  let dictionary = {
    '(' : ')',
    '{' : '}',
    '[' : ']',
  }

  for(let i = 0; i < s.length; i++){
    if(s[i] in dictionary){
      stack.push(s[i]);
    } else{
      check = stack.pop();
      if(dictionary[check] != s[i]){
        return false;
      }
    }
  }

  if(stack.length != 0){
    return false;
  }
  return true;

}


let s = "([)";
console.log(isValid(s));

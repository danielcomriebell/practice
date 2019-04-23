// const strs =  ["eat", "tea", "tan", "ate", "nat", "bat"];
//
//
//
// let groupAnagrams = function(strs){
//   let obj = {};
//   let key;
//   for (let i = 0; i < strs.length; i++){
//     key = strs[i].split('').sort().join('');
//     if(!obj[key]){
//       obj[key] = [strs[i]];
//     } else{
//       obj[key].push(strs[i]);
//     }
//   }
//   return Object.values(obj);
//   // console.log(Object.values(obj));
// }
//
//
//
// console.log(groupAnagrams(strs));
// //
// // let str = strs[0].split('').sort().join('');
// // console.log(str);

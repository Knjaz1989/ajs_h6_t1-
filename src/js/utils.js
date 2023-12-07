export function orderByProps (obj, filterList) {
  let newArray = [];
  for (const key in obj) {
    let data = {key,value: obj[key]}
    if (filterList.includes(key)) {
      let index = filterList.indexOf(key);
      newArray.splice(index, 0, data);
      continue;
    } 
    let lastIndex = newArray.length - 1;
    let lastElement = newArray[lastIndex];
    if (filterList.includes(lastElement.key) || lastElement.key < data.key ) {
      newArray.push(data);
    } else {
      newArray.splice(lastIndex, 0, data);
    }
  }
  return newArray;
}

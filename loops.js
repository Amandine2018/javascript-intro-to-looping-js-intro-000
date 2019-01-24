var array = [];
for (let i = 0; i < 25; i++) {
  if (i === 1 || i === 0){
    array.push("I am ${i} strange loop.")
  } else {
    array.push(`I am ${i} strange loops.`)
  }
}

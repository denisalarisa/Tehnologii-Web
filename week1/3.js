function listaNumere(listaNumere) {
  let result =[]
  for(let i=0; i<listaNumere.length;i++){
    result.push(listaNumere[i])
  }
  return result
}

console.log(listaNumere([2,3,4,5]))
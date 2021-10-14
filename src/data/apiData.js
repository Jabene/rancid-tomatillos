export const fetchData = (endPoint) => {
  return (
    fetch(`https:rancid-tomatillos.herokuapp.com/api/v2/${endPoint}`)
    .then(response => response.json())
    // .then(response => console.log(response))
  )
}

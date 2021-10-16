
export const fetchData = (endPoint) => {
  return (
    fetch(`https:rancid-tomatillos.herokuapp.com/api/v2/${endPoint}`)
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        return false;
      }
    })
  )
}

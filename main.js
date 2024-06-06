async function start() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
  const weatherData = await weatherPromise.json()
  const temp = weatherData.properties.periods[0].temperature
  document.querySelector("#temperature-output").textContent = temp
}
start()

async function petArea() {
  const petPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  const petData = await petPromise.json()
  petData.forEach(pet => {
    console.log(pet.name)
  });
}
petArea()
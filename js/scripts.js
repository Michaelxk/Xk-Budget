
let vacationCalc = document.getElementById("vacationCalc")
    
vacationCalc.addEventListener("submit", calcHandler)

function getValues() {
  let destiny = document.getElementById("destiny").value,
    budget = document.getElementById("budget").value,
    acomodation = document.getElementById("acomodation").value,
    food = document.getElementById("food").value,
    transport = document.getElementById("transport").value

    return { destiny,budget,acomodation,food,transport } 

}

function calcHandler(e) {
  e.preventDefault();

  const { destiny,budget,acomodation,food,transport } = getValues();

  let expenses = parseInt(acomodation) + parseInt(transport) + parseInt(food)
  let balance = budget - expenses

  UI(budget,balance,destiny)
}

function UI(budget,balance,destiny) {
  let result = document.getElementById("result")
  let dataPrint = document.createElement("div")
  dataPrint.innerHTML = `
    <div class="container-data">
      <div class="col s4">
        <h6>${destiny}</h6>  
      </div>
      <div class="col s4">
        <h6>${budget}</h6>   
      </div>
      <div class="col s4">
        <h6>${balance}</h6>   
      </div>
    </div>
  `
  result.appendChild(dataPrint)
  reset()
}

function reset() {
  document.getElementById("vacationCalc").reset()
}

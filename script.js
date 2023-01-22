const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

/* adiciona um evento */
button.addEventListener("click", add)
form.addEventListener("change", save)

/* agrupar códigos e utilizar quando chamada */
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso!")
    return
  }

  alert("Adicionado com sucesso!")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}
// const data = {
//  vitaminTime: ["01-18", "01-19", "01-20"],
//}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()

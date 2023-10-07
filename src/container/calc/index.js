class Calc {
  static #value = ''
  static #isDot = false
  static #NAME = 'calc'

  static add = (newValue) => {
    if (isNaN(this.#value[this.#value.length - 2])) {
      if (
        Number(this.#value[this.#value.length - 1]) === 0 &&
        this.#isDot == false
      ) {
        return null
      }
    }

    this.#value = this.#value.concat(newValue)
    this.#output()
  }

  static op = (opValue) => {
    if (isNaN(this.#value[this.#value.length - 1]))
      return null

    this.#value = this.#value.concat(opValue)
    this.#output()
    this.#isDot = false
  }

  static dot = () => {
    if (this.#isDot) return null

    if (isNaN(this.#value[this.#value.length - 1]))
      return null

    this.#value = this.#value.concat('.')
    this.#output()
    this.#isDot = true
  }

  static reset = () => {
    this.#value = ''
    this.#output()
    this.#isDot = false
  }

  static #output = () => {
    this.#save()
    window.output.innerHTML = this.#value
  }

  static result = () => {
    this.#value = String(eval(this.#value))
    this.#output()
    this.#isDot = false
  }

  static #save = () => {
    window.localStorage.setItem(this.#NAME, this.#value)
  }

  static #load = () => {
    this.#value =
      window.localStorage.getItem(this.#NAME) || ''
  }

  static init = () => {
    this.#load()
    // this.#output()
  }
}

Calc.init()

window.calc = Calc

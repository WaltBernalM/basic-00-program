// Animal class constructor must have two properties: color and energy
// Animal class prototype must have three methods: isActive(), sleep(), getColor()
// isActive() whenever ran, must lower energy until energy hits 0. Will also report the update value of energy. If energy reaches 0, animal object must go to sleep by invoking sleep()
// getColor() must print color property
class Animal {
  constructor(color = "yellow", energy = 100) {
    this.color = color
    this.energy = energy
  }
  isActive() {
    if (this.energy > 0) {
      this.energy -= 20
      console.log("Energy is decreasing,currently at:", this.energy)
    } else {
      this.sleep()
    }
  }
  sleep() {
    this.energy += 20
    console.log("Energ is increasing, currently at:", this.energy)
  }
  getColor() {
    console.log(this.color)
  }
}
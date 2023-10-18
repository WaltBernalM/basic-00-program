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

// Cat class will inherit from Animal, with additional sound, canJumpHigh and canClimbTrees properties, specific to Cat class. And its own makeSound() method.
class Cat extends Animal {
  constructor(sound = "prr", canJumpHigh = true, canClimbTrees = true, color, energy) {
    super(color, energy)
    this.sound = sound
    this.canJumpHigh = canJumpHigh
    this.canClimbTrees = canClimbTrees
  }
  makeSound() {
    console.log(this.sound)
  }
}

// Bird class will also inherit from Animal, but with its own specific properties, it will have sound and canFly, also the makeSound method.
class Bird extends Animal {
  constructor(sound = "chirp", canfly = true, color, energy) {
    super(color, energy)
    this.sound = sound
    this.canfly = canfly
  }
  makeSound() {
    console.log(this.sound)
  }
}

// The HouseCat will extend the Cat class, it will have its own houseCatSound, also will override makeSound() method.
// The makeSound() will have a option as argument, if true, will perform the parent class method, if false, will display the houseCatSound
class HouseCat extends Cat {
  constructor(
    houseCatSound = "meow",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy)
    this.houseCatSound = houseCatSound
  }
  makeSound(option = false) {
    option ? super.makeSound() : console.log(this.houseCatSound)
  }
}
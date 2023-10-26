// '.length'
const cars = ['Ford', 'Jeep', 'Lexus']
console.log(cars.length)

// '.concat()'
const moreCars = ['Toyota', 'Subaru', 'Tesla', 'Honda']
const totalCars = cars.concat(moreCars)
console.log(totalCars)

// 'indexOf()' and 'lastIndexOf()'
console.log(totalCars.indexOf('Honda'))
console.log(totalCars.lastIndexOf('Ford'))

// '.join()'
const stringOfCars = totalCars.join()
console.log(stringOfCars)

// '.split()'
const carsFromString = stringOfCars.split(',')
console.log(carsFromString)

// 'reverse()'
const carsInReverse = totalCars.reverse()
console.log(carsInReverse)

// 'sort()'
console.log(carsInReverse.sort())
console.log(carsInReverse.indexOf('Ford'))

// 'slice()'
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
const reptiles = pets.slice(4, 6)
console.log(reptiles)
console.log(pets)

// 'splice()'
const removedReptiles = pets.splice(4, 2, 'hamster')
console.log(removedReptiles)
console.log(pets)

// 'pop()'
const removedPet = pets.pop()
console.log(removedPet)
console.log(pets)

// 'push'   
pets.push(removedPet)
console.log(pets)

// 'shift()'
console.log(pets.shift())

// 'unshift()'
pets.unshift('turtle')
console.log(pets)

// '.forEach'
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
function addTwo(num, index, arr) {
    arr[index] = num + 2
}
numbers.forEach(addTwo)
console.log(numbers)

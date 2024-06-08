// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function  destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newCats = [...cats, "Broom"]
    return newCats
}

function  prependCat(name) {
    const newCats = [ "Arnold", ...cats]
    return newCats
}

function removeLastCat() {
    const newCats1 = cats.slice(0,-1)
    return newCats1
}

function removeFirstCat() {
    const newCats1 = cats.slice(1)
    return newCats1
}


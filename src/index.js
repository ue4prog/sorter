class Sorter {
  constructor() {
    this.numbers = [];
  }

  comporator(fisrtEl, secEl) {
    return fisrtEl - secEl;
  }

  add(number) {
    this.numbers.push(number)
  }

  at(index) {
    return this.numbers[index]
  }

  get length() {
    return this.numbers.length;
  }

  toArray() {
    return this.numbers;
  }

  sort(indices) {
    const tmpArray = indices.map(index => this.numbers[index])
    tmpArray.sort(this.comporator);
    let i = 0
    indices.sort((a,b) => a -b)
    indices.forEach(index => {
        this.numbers[index] = tmpArray[i]
        i++
      });
  }

  setComparator(compareFunction) {
    this.comporator = compareFunction
  }
}

module.exports = Sorter;
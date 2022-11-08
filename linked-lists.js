class nodeUnit {
  value;
  nextNode;
  constructor(val = null, next = null) {
    this.value = val;
    this.nextNode = next;
  }

  updateNode = (val) => {
    this.value = val;
  };
}

class linkedList {
  #node = null;
  #size = 0;
  constructor(arr) {
    if (arr == undefined) {
      this.#node = new NodeUnit();
    } else {
      if (!(arr instanceof Array))
        throw new Error("Argument passed must be an Array");
      for (let i = 0; i < arr.length; ++i) {
        this.append(arr[i]);
      }
    }
  }
  append = (value) => {
    if (this.#node === null) {
      this.#node = new nodeUnit(value);
    } else {
      let traverseNode = this.#node;
      while (traverseNode.nextNode !== null) {
        traverseNode = traverseNode.nextNode;
      }
      traverseNode.nextNode = new nodeUnit(value);
    }
    ++this.#size;
  };
  prepend = (value) => {
    const newNode = new nodeUnit(value);
    newNode.nextNode = this.#node;
    this.#node = newNode;
    ++this.#size;
  };
  insertAt = (val, index) => {
    if (index == 0) return this.prepend(val);
    if (index == this.#size) return this.append(val);
    if (index >= this.#size) throw new Error("Invalid Index");
    if (val == undefined || index == undefined)
      throw new Error("Invalid arguments passed");

    let traverseNode = this.#node;
    for (let i = 1; i < index; ++i) {
      traverseNode = traverseNode.nextNode;
    }
    let newNode = new nodeUnit(val);
    newNode.nextNode = traverseNode.nextNode;
    traverseNode.nextNode = newNode;
  };
  removeAt = (index) => {
    if (index == this.#size - 1) return this.pop();
    if (index < 0 || index >= this.#size || index == undefined)
      throw new Error("Invalid Index");
    if (index == 0) {
      this.#node = this.#node.nextNode;
    } else {
      let traverseNode = this.#node;
      for (let i = 1; i < index; ++i) {
        traverseNode = traverseNode.nextNode;
      }
      traverseNode.nextNode = traverseNode.nextNode.nextNode;
    }
    --this.#size;
  };
  size = () => this.#size;
  head = () => this.#node.value;
  tail = () => {
    let traverseNode = this.#node;
    while (traverseNode.nextNode !== null) {
      traverseNode = traverseNode.nextNode;
    }
    return traverseNode.value;
  };
  at = (index) => {
    if (index >= this.#size) throw new Error("Invalid Index");
    let traverseNode = this.#node;
    for (let i = 1; i <= index; ++i) {
      traverseNode = traverseNode.nextNode;
    }
    return traverseNode.value;
  };
  pop = () => {
    let traverseNode = this.#node;
    while (traverseNode.nextNode.nextNode !== null) {
      traverseNode = traverseNode.nextNode;
    }
    traverseNode.nextNode = null;
    --this.#size;
  };
  contains = (val) => {
    let traverseNode = this.#node;
    while (traverseNode !== null) {
      if (traverseNode.value === val) return true;
      traverseNode = traverseNode.nextNode;
    }
    return false;
  };
  find = (value) => {
    let traverseNode = this.#node;
    let index = 0;
    while (traverseNode !== null) {
      if (traverseNode.value === value) return index;
      traverseNode = traverseNode.nextNode;
      ++index;
    }
    return -1;
  };
  toString = () => {
    if (this.#node === null) return "";
    let result = `( ${this.#node.value} )`;
    let traverseNode = this.#node;
    while (traverseNode.nextNode !== null) {
      traverseNode = traverseNode.nextNode;
      result = result.concat(` -> ( ${traverseNode.value} )`);
    }
    result = result.concat(` -> null`);
    return result;
  };
}

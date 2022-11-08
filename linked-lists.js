class nodeUnit {
    value;
    nextNode;
    constructor(val = null, next = null) {
        this.value = val;
        this.nextNode = next;
    }

    updateNode = (val) => {
        this.value = val;
    }
};

class linkedList {
    #node = null;
    #size = 0;
    constructor(arr) {
        if (arr == undefined)
        {
            this.#node = new NodeUnit();
        }
        else {
            if (!(arr instanceof Array)) throw new Error("Argument passed must be an Array");
            for (let i = 0; i < arr.length; ++i)
            {
                this.append(arr[i]);
            }
        }
    }
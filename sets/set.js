export class Set {
    constructor() {
        this.items = {}
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true
        }
        return false
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element]
            return true
        }
        return false
    }

    has(element) { return Object.prototype.hasOwnProperty.call(this.items, element) }

    clear() { this.items = {} }

    size() {
        let count = 0
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                count++;
            }
        }
        return count
    }

    values() {
        let values = []
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                values.push(key)
            }
        }
        return values
    }
}

const set = new Set();
set.add(1);
console.log(set.values()); // exibe [1]
console.log(set.has(1)); // exibe true
console.log(set.size()); // exibe 1
set.add(2);
console.log(set.values()); // exibe [1, 2]
console.log(set.has(2)); // true
console.log(set.size()); // 2
set.delete(1);
console.log(set.values()); // exibe [2]
set.delete(2);
console.log(set.values()); // exibe []


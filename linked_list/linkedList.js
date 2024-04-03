import { defaultEquals } from "../util/util.js";
import { Node } from "./models/linked-list-models.js";

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.size() === 0;
    }

    getHead() {
        return this.head;
    }

    push(element) {
        const node = new Node(element);
        let current;

        if (this.head = null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node
        }
        this.count++;
    }

    insert(element, position) {
        if (position >= 0 && position <= this.count) {
            const node = new Node(element);
            if (position === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(position - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            for (let i = 0; i < index && current != null; i++) {
                current = current.next;
            }
            return current;
        }
        return undefined;
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    removeAt(position) {
        if (position >= 0 && position < this.count) {
            let current = this.head;

            if (position === 0) {
                this.head = current.next;
            } else {
                let previous;
                for (let i = 0; i < position; i++) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    toString() {
        if (this.head == null) {
            return "";
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;

        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
}
class Queue {
    constructor(data) {
        this.data = data || [];
    }

    enqueue(e) {
        if (!e) throw ('Element is required');
        this.data.push(e);
        return this.data;
    }

    dequeue() {
        return this.data.shift();
    }

    peek() {
        return this.data[0];
    }

    purge() {
        this.data = [];
    }
}

var q1 = new Queue([1, 2, 3, 4, 5, 6, 7]);
var q2 = new Queue(['a', 'b', 'c', 'd', 'e', 'f']);

var weaved = [];
while (q1.peek() || q2.peek()) {
    if (q1.peek()) weaved.push(q1.dequeue());
    if (q2.peek()) weaved.push(q2.dequeue());
}

console.log(weaved);
class Stack {
    constructor(data) {
        this.data = data || [];
    }

    push(e) {
        if (e == null || e == undefined) throw 'One element is manadatory!'
        this.data.push(e);
        return this.data;
    }

    pop() {
        this.data.pop();
        return this.data;
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    purge() {
        this.data = [];
        return true;
    }
}
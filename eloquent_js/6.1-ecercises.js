class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus (vec) {
        return new Vec(this.x+vec.x, this.y+vec.y);
    }

    minus (vec) {
        return new Vec(this.x-vec.x, this.y-vec.y);
    }

    get length() {
        return Math.sqrt(this.x**2 + this.y**2);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5



class Group {
    // Since I want an empty group... can i
    // use no constructor?

    constructor () {
        this.elements = [];
    }

    has (element) {
        if (this.elements.indexOf(element) == -1) {
            return false;
        }
        return true;
    }

    add (element) {
        if (!this.has(element)) {
            this.elements.push(element);
        }
    }

    delete (element) {
        if (this.has(element)) {
            let index = this.elements.indexOf(element);
            this.elements = (
                this.elements.slice(0, index)
                .concat(this.elements.slice(index + 1))
            );
        }
    }
    
    static from(iter) {
        let new_group = new Group();
        for (let element of iter) {
            if (!new_group.has(element)) {
                new_group.add(element);
            }
        }
        return new_group
    }
}

let group = Group.from([10, 20]);
console.log(group);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false


class GroupIterator {
  constructor(group) {
    this.group = group;
  }

  next() {
    if (this.group.elements.length == 0) {
      return {done: true};
    }
    let value = this.group.elements.shift();
    return {value, done: false};
  }
}
Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c", "a", "A", "B"])) {
  console.log(value);
}
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
    for (;;) {
        try {
            return primitiveMultiply(a, b);
        } catch (error) {
            if (error instanceof MultiplicatorUnitFailure) {
                console.log("Clunky error. Trying again.");
            } else {
                throw error;
            }
        }
    }
}

console.log(reliableMultiply(8, 8));
// → 64




const box = new class {
  locked = true;
  #content = [];

  unlock() { this.locked = false; }
  lock() { this.locked = true;  }
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this.#content;
  }
};

function withBoxUnlocked(body) {
  // Your code here.
  // Kind of dumb xd calling the property itself
  let close_after = box.locked;
  try {
    box.unlock();
    body();
  } finally {
    if (close_after) {
        box.lock();
    }
  }
}

withBoxUnlocked(() => {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(() => {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true
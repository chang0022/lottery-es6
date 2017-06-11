class Test {
  constructor() {
    this.a = 'Hello Neo!';
  }
}

let test = new Test();

document.body.innerHTML = test.a;
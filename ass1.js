
class Car{
    constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  stop(){
    return `Car Is Running No`;
  }
  run(){
    return `Car Is Stopped`;
  }
}
  let car1=new Car("a",1,100)
  let car2=new Car("b",2,200)
  let car3=new Car("c",3,300)

  console.log(`Car One ${car1.n} And Model Is ${car1.m}, ${car1.p}`)

  console.log(car1.run())

  // Needed Output
  
  "Car One Name Is MG And Model Is 2022 And Price Is 420000"
  "Car Is Running Now"
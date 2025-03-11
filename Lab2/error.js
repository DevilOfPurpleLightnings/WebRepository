// --------- Завдання 1.2.3-1.2.6 ---------
car1 = new Object();
car1.color = "black";
car1.maxSpeed = 200;
car1.driver = new Object();
car1.driver.name = "Devil Of Purple Lightnings";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";
car1.tuning = true;
car1["number of accidents"] = 0;
car1.drive = function(){
    if(this.driver["personal limitations"] == null){
        console.log("I can drive anytime");
    }else{
        console.log(car1.driver["personal limitations"]);
    }
}


car2 = new Object();
car2.color = "black";
car2.maxSpeed = 180;
car2.driver = new Object();
car2.driver.name = "Devil Of Purple Lightnings";
car2.driver.category = "B";
car2.driver["personal limitations"] = null;
car2.tuning = false;
car2["number of accidents"] = 2;
car2.drive = function(){
    if(this.driver["personal limitations"] == null){
        console.log("I can drive anytime");
    }else{
        console.log(car2.driver["personal limitations"]);
    }
}
console.log(car1);
console.log(car2)
car1.drive()
car2.drive();
// --------- Завдання 1.2.7-1.2.10 ---------
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
    this.driver = null;
}
Truck.prototype.AssignDriver = function(name, nightDriving, experience){
    this.driver = {name, nightDriving, experience};
}
Truck.prototype.trip = function() {
    if (this.driver === null) {
        console.log("No driver assigned");
    } else {
        let message = `Driver ${this.driver.name}`;
        message += this.driver.nightDriving ? " drives at night" : " does not drive at night";
        message += ` and has ${this.driver.experience} years of experience.`;
        console.log(message);
    }
};

truck1 = new Truck("purple", 1000, 120, "nothing", "nothing")
truck1.AssignDriver("Devil Of Purple Lightnings", 0, 10);
truck2 = new Truck("purple", 1000, 120, "nothing", "nothing")
truck2.AssignDriver("Devil Of Purple Lightnings", 1, 11);
console.log(truck1);
console.log(truck2)
truck1.trip();
truck2.trip();
// --------- Завдання 1.2.12-1.2.15 ---------
class Square{
    constructor(a) {
        this.a = a
    }
    static help() {
        console.log("Квадрат — це чотирикутник, у якого всі сторони рівні і кути прямі (90 градусів).");
        console.log("Особливості квадрата:");
        console.log("1. Всі сторони квадрата однакові.");
        console.log("2. Всі кути квадрата прямі (90 градусів).");
        console.log("3. Площу квадрата можна обчислити за формулою: площа = сторона * сторона.");
        console.log("4. Периметр квадрата: периметр = 4 * сторона.");
    }
    lenght(){
        console.log(this.a*4);
    }
    square(){
        console.log(this.a*this.a);
    }
    info(){
        console.log("Довжина всіх сторін: " + this.a);
        console.log("Кути дорівнюють 90");
        console.log("Периметр: " + this.a*4);
        console.log("Площа: " + this.a*this.a)
    }
}
Square.help();
square = new Square(12);
console.log(square);
square.lenght();
square.square();
square.info();
// --------- Завдання 1.2.16-1.2.19 ---------
class Rectangle extends Square{
    constructor(a,b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Прямокутник");
        console.log("1. Має дві пари рівних сторін.");
        console.log("2. Усі кути прямокутника рівні і становлять 90 градусів.");
        console.log("3. Площа прямокутника обчислюється як a * b.");
        console.log("4. Периметр прямокутника обчислюється як 2 * (a + b).");
    }
    lenght(){
        console.log(this.a*2+this.b*2);
    }
    square(){
        console.log(this.a*this.b);
    }
    info(){
        console.log("Довжини всіх сторін: " + this.a + " та " + this.b);
        console.log("Кути дорівнюють 90");
        console.log("Периметр: " + (this.a*2+this.b*2));
        console.log("Площа: " + this.a*this.b)
    }
}
Rectangle.help();
rectangle = new Rectangle(10, 5);
console.log(rectangle);
rectangle.lenght();
rectangle.square();
rectangle.info();
// --------- Завдання 1.2.20-1.2.24 ---------
//1.2.18 and 1.2.19
class Rhombus extends Square
{
    alpha =0;
    beta =0;
    constructor(a, alpha, beta){
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }
    static help = function()
    {
        console.log("Ромб - геометрична фігура, яка має 4 рівні сторони, кут між якими НЕ дорівнює 90 градусів. Протилежні кути рівні");
    }

    length(){
        console.log(`Сума довжин сторін = ${4*this.a}`);
    }

    square(){
        console.log(`Площа Ромб = ${this.a*this.a*Math.sin(this.beta*Math.PI/180)}`);
    }

    info(){
        console.log(`Довжина кожної сторони = ${this.a}`);
        console.log(`Значення 2 з 4 кутів = ${this.alpha}`);
        console.log(`Значення інших 2 з 4 кутів = ${this.beta}`);
        this.length();
        this.square();
    }
}
Rhombus.help();
rhombus = new Rhombus(10, 30, 60);
console.log(rhombus);
console.log(rhombus.lenght());
console.log(rhombus.square());
console.log(rhombus.info());
class Parallelogram extends Rhombus
{
    b=0;
    constructor(a, b, alpha, beta){
        super(a, alpha, beta);
        this.b = b;
    }

    static help = function(){
        console.log("Паралелограм — чотирикутник, протилежні сторони якого попарно паралельні, тобто лежать на паралельних прямих.");
    }

    length(){
        return 2 * (this.a + this.b);
    }

    square(){
        return this.a * this.b * Math.sin(this.beta * (Math.PI / 180));
    }

    info(){
        console.log(`Довжина 2 з 4 сторін = ${this.a}`);
        console.log(`Довжина інших 2 з 4 сторін = ${this.b}`);
        console.log(`Значення 2 з 4 кутів = ${this.alpha}`);
        console.log(`Значення інших 2 з 4 кутів = ${this.beta}`);
        this.length();
        this.square();
    }
}
//1.2.23
Parallelogram.help();
parallelogram = new Parallelogram(10, 30, 60);
console.log(parallelogram);
console.log(parallelogram.lenght());
console.log(parallelogram.square());
console.log(parallelogram.info());
// --------- Завдання 1.2.25-1.2.26 ---------

// --------- Завдання 1.2.27-1.2.28 ---------

// --------- Завдання 1.2.29-1.2.31 ---------

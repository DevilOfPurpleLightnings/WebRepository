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


car2 = {
    color: "black",
    maxSpeed: 180,
    driver : {
        name : "Devil Of Purple Lightnings",
        category : "B",
        ["personal limitations"] : null,
    },
    tuning : false,
    ["number of accidents"] : 2,
}
car2.drive = function () {
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
    this.trip = function () {
        if (this.driver === null) {
            console.log("No driver assigned");
        } else {
            let message = `Driver ${this.driver.name}`;
            message += this.driver.nightDriving ? " drives at night" : " does not drive at night";
            message += ` and has ${this.driver.experience} years of experience.`;
            console.log(message);
        }
    }
}
Truck.prototype.AssignDriver = function(name, nightDriving, experience){
    this.driver = {name, nightDriving, experience};
}

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
// --------- Завдання 1.2.16-1.2.17 ---------
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
    get a() {
        return this._a;
    }
    set a(value) {
        if (value < 0) {
            return ("Error");
        } else {
            this._a = value;
        }
    }
    get b() {
        return this._b;
    }
    set b(value) {
        if (value < 0) {
            return ("Error");
        } else {
            this._b = value;
        }
    }
}
Rectangle.help();
rectangle = new Rectangle(10, 5);
console.log(rectangle);
rectangle.lenght();
rectangle.square();
rectangle.info();
// --------- Завдання 1.2.18-1.2.19 ---------
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
        console.log("Ромб — це чотирикутник, у якого всі сторони рівні. Основні властивості ромба:");
        console.log("1. Усі сторони рівні.");
        console.log("2. Протилежні кути рівні.");
        console.log("3. Діагоналі перетинаються під прямим кутом і ділять ромб на чотири рівні прямокутні трикутники.");
        console.log("4. Діагоналі є осьовими симетріями і ділять ромб на дві рівні частини.");

    }

    length(){
        console.log(this.a*4);
    }

    square(){
        console.log(this.a*this.a*Math.sin(this.beta*Math.PI/180));
    }

    info(){
        console.log("Довжина кожної сторони = " + this.a);
        console.log("Значення 2 з 4 кутів = " + this.alpha);
        console.log("Значення інших 2 з 4 кутів = " + this.beta);
        console.log("Cумма довжин всіх сторін = " + this.a * 4);
        console.log("Площа = " + this.a * this.a * Math.sin(this.beta * Math.PI / 180));
    }
}
Rhombus.help();
rhombus = new Rhombus(10, 30, 60);
console.log(rhombus);
rhombus.lenght();
rhombus.square();
rhombus.info();
// --------- Завдання 1.2.20-1.2.21 ---------
class Parallelogram extends Rhombus {
    b = 0;
    constructor(a, b, alpha, beta) {
        super(a, alpha, beta);
        this.b = b;
    }

    static help = function () {
        console.log("Паралелограм — це чотирикутник, у якому протилежні сторони паралельні та рівні за довжиною. Основні властивості паралелограма:");
        console.log("1. Протилежні сторони рівні та паралельні.");
        console.log("2. Протилежні кути рівні.");
        console.log("3. Діагоналі перетинаються в середині, але не обов'язково перетинаються під прямим кутом.");
        console.log("4. Діагоналі є осьовими симетріями і ділять ромб на дві рівні частини.");
    }

    length() {
        console.log(2 * (this.a + this.b));
    }

    square() {
        console.log(this.a * this.b * Math.sin(this.beta * (Math.PI / 180)));
    }

    info() {
        console.log("Довжина 2 з 4 сторін = " + this.a);
        console.log("Довжина інших 2 з 4 сторін = " + this.b);
        console.log("Значення 2 з 4 кутів = " + this.alpha);
        console.log("Значення інших 2 з 4 кутів = " + this.beta);
        console.log("Cумма довжин всіх сторін = " + (this.a +this.b * 2));
        console.log("Площа = " + (this.a * this.b * Math.sin(this.beta * Math.PI / 180)));
    }
}
Parallelogram.help();
parallelogram = new Parallelogram(10, 5, 30, 60);
console.log(parallelogram);
parallelogram.lenght();
parallelogram.square();
parallelogram.info();
// --------- Завдання 1.2.25-1.2.26 ---------
function Triangular(a = 3, b = 4, c = 5) {
    return {a, b, c}
}
console.log(Triangular());
console.log(Triangular(2));
console.log(Triangular(2,3));
// --------- Завдання 1.2.27-1.2.28 ---------
function PiMultiplier(a) {
    return function () {
        return Math.PI * a;
    }
}
pm1 = PiMultiplier(2);
pm2 = PiMultiplier(2 / 3);
pm3 = PiMultiplier(1 / 2);
console.log(pm1());
console.log(pm2());
console.log(pm3());
// --------- Завдання 1.2.29-1.2.31 ---------
function Painter(color) {
    return function (obj) {
        console.log(obj.type ? `Color: ${color}, Type: ${obj.type}` : "No 'type' property occurred!");
    };
}

PaintBlue = Painter("Blue");
PaintRed = Painter("Red");
PaintYellow = Painter("Yellow");

obj1 = {
    maxSpeed: 280,
    type : "Sportcar",
    color : "magenta",
}
obj2 = {
    type: "Truck",
    avgSpeed: 90,
    ["avg capacity"]:2400
}
obj3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true,
}
PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3);

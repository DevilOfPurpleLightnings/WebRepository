function triangle(value1, type1, value2, type2) {
    a = 0;
    b = 0;
    c = 0;
    a_angle = 0;
    b_angle = 0;
    c_angle = 90;
    check = true;
    if (value1 > 0 && value2 > 0) {
        if ((type1 === "leg" && type2 === "hypotenuse") || (type2 === "leg" && type1 === "hypotenuse")) {
            if (type1 === "leg") {
                a = value1;
                c = value2;
            } else {
                a = value2;
                c = value1;
            }
            b = Math.sqrt(c * c - a * a);
            a_angle = Math.asin(a / c) * (180 / Math.PI);
            b_angle = 90 - a_angle;
        } else if ((type1 === "leg" && type2 === "leg")) {
            a = value1;
            b = value2;
            c = Math.sqrt(b * b + a * a);
            a_angle = Math.asin(a / c) * (180 / Math.PI);
            b_angle = 90 - a_angle;
        } else if ((type1 === "leg" && type2 === "adjacent angle") || (type2 === "leg" && type1 === "adjacent angle")) {
            if (type1 === "leg") {
                a = value1;
                b_angle = value2;
            } else {
                a = value2;
                b_angle = value1;
            }
            a_angle = 90 - b_angle;
            c = a / Math.cos(b_angle * Math.PI / 180);
            b = Math.sqrt(c * c - a * a);

        } else if ((type1 === "leg" && type2 === "opposite angle") || (type2 === "leg" && type1 === "opposite angle")) {
            if (type1 === "leg") {
                a = value1;
                a_angle = value2;
            } else {
                a = value2;
                a_angle = value1;
            }
            b_angle = 90 - a_angle;
            c = a / Math.sin(a_angle * Math.PI / 180);
            b = Math.sqrt(c * c - a * a);
        } else if ((type1 === "angle" && type2 === "hypotenuse") || (type2 === "angle" && type1 === "hypotenuse")) {
            if (type1 === "hypotenuse") {
                c = value1;
                a_angle = value2;
            } else {
                c = value2;
                a_angle = value1;
            }
            b_angle = 90 - a_angle;
            a = c * Math.sin(a_angle * Math.PI / 180);
            b = c * Math.sin(b_angle * Math.PI / 180);
        } else {
            return "Nice try!";
            check = false
        }
        if (check) {
            if ((a_angle > 0.0) && (b_angle > 0.0) && (a_angle < 90.0) && (b_angle < 90.0) && (b_angle + a_angle == 90.0) && (a < c) && (b < c) && (a + b > c) && (b + c > a) && (c + a > b)) {
                console.log("a = " + a);
                console.log("b = " + b);
                console.log("c = " + c);
                console.log("alpha = " + a_angle);
                console.log("beta = " + b_angle);
                return "success";
            }else {
                return "failed";
            }
        }
    } else {
        return "Zero or negative input";
    }
}

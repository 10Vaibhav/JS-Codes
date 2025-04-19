// Discriminated Union

interface Circle{
    kind: "circle", // This is Discriminated Union 😅
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number,
}

type Shape = Circle | Square

function getTrueShape(shape: Shape){
    if(shape.kind == "circle"){;
        return Math.PI * shape.radius**2
    }
    return shape.side* shape.side;
}

// Exhaustiveness Checking.
function getArea(shape: Shape){

    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        default:
            const _defaultFroShape: never = shape
            return _defaultFroShape
    }

}


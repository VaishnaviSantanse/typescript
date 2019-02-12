interface Shape_Rect{
    name: string;
    width: number;
    height: number;
    color?: string;
}
 
function area_Rect(shape : Shape_Rect) {
    var area_Rect = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area_Rect + " cm squared";
}
 
console.log( area_Rect( {name: "rectangle", width: 30, height: 15} ) );
console.log( area_Rect( {name: "square", width: 30, height: 30, color: "blue"} ) );
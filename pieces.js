class Piece {
    constructor(name, color, movement){
        this.name = name;
        this.color = color;
        this.movement = movement;
    }

    getName(){
        return this.name;
    }

    getColor(){
        return this.color;
    }

    getNameAndColor(){
        return this.name + "-" + this.color;
    }

    getMovement(){
        return this.movement;
    }
}

class Pawn extends Piece {
    constructor(color){
        let movement;
        if(color === "b"){
            movement = 1;
        }
        else{
            movement = -1;
        }
        super("pawn", color, movement);
    }
}

class King extends Piece {
    constructor(color){
        super("king", color, [[0,1],[1,0],[1,1]]);
    }
}

class Queen extends Piece {
    constructor(color){
        super("queen", color, ["linear","diagonal"]);
    }
}

class Rook extends Piece {
    constructor(color){
        super("rook", color, ["linear"]);
    }
}

class Bishop extends Piece {
    constructor(color){
        super("bishop", color, ["diagonal"]);
    }
}

class Knight extends Piece {
    constructor(color){
        super("knight", color, [[2,1],[1,2]]);
    }
}
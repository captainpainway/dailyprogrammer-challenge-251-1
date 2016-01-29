"use strict";

let shape ='    *\n   **\n  * *\n *  *\n*****';

class Shape {
    constructor(shape) {
        this.split = shape.split('\n');
        this.numbers = [];
        this.lineLength;
        this.arrMap;
    }
    binary() {
        let x = 1;
        this.split.forEach(i => {
            this.lineLength = this.split.length;
            for(let j of i){
                (j === '*')?this.numbers.push([x, 1]):this.numbers.push([x, 0]);
                x++;
            }
        });
        this.arrMap = new Map(this.numbers);
    }
}

class Rows extends Shape {
    constructor() {
        super(shape);
        this.rows = '';
    }
    counted() {
        super.binary();
        this.arrMap.forEach((value, key) => {
            if(key % 5 == 0){
                this.arrMap.set(key, '\n');
            }else if(value == 0){
                value = '';
            }else{
                if(this.arrMap.get(key+1) > 0){
                    this.arrMap.set(key+1, this.arrMap.get(key) + this.arrMap.get(key+1));
                    value = '';
                }
            }
            if(key % 5 == 0){
                this.rows = this.rows + value + '\n';
            }else{
                this.rows = this.rows + value;
            }
            return this.rows;
        });
    }
    log() {
        this.counted();
        console.log(this.rows);
    }
}

let rowCalc = new Rows(shape);
rowCalc.log();

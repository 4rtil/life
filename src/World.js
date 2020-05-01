import React, { Component } from 'react';

class World extends Component {

    constructor(props) {
        super(props);
        this.state = [[0, 0, 0, 0], [0, 0, 0, 0]];
    }

    render() {
        return (
            <div className="World">
                <canvas id="plane" width="100%" height="100%"></canvas>
            </div>
        );
    }

    componentDidMount() {
        //console.log(this);
        //window.setInterval.call(this, this.draw, 1000);
        this.draw();
    }

    draw() {
        var canvas = document.getElementById('plane');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.fillStyle = this.randomizeColor();
            ctx.fillRect(10, 10, 200, 200);
            ctx.fillStyle = this.randomizeColor();
            ctx.fillRect(30, 30, 50, 50);
        }
    }

    randomizeColor() {
        let color = "rgba(";
        color += Math.floor(Math.random() * 255);
        color += ',';
        color += Math.floor(Math.random() * 255);
        color += ',';
        color += Math.floor(Math.random() * 255);
        color += ',';
        color += parseFloat(Math.random()).toFixed(2);
        color += ')';
        return color;
    }

}




export default World;

//any live cell with fewer than 2 live neighbours dies
//any live cell with 2 or 3 live neighbours lives on
//any live cell with 3 or more live neighbours dies
//any dead cell with 3 neighbours becomes a live cell
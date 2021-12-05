import "./Hangman.css";
import React from "react";
import axios from "axios";

export default class Hangman extends React.Component {
  state = {
    right: 0,
    wrong: 0,
    myguess: "",
    guessedword: 0,
    randWord: [],
    locations: [
      [50, 110, 100, 110],
      [75, 110, 75, 10],
      [75, 10, 125, 10],
      [125, 10, 125, 30],
      [125, 40, 10, 0],
      [125, 50, 125, 80],
      [125, 55, 110, 60],
      [125, 55, 140, 60],
      [125, 80, 115, 95],
      [125, 80, 135, 95],
    ],
    positions: [],
  };

  //get the word
  getWord = () => {
    axios
      .get(
        `https://gist.githubusercontent.com/deekayen/4148741/raw/98d35708fa344717d8eee15d11987de6c8e26d7d/1-1000.txt`
      )
      .then((res) => {
        const dataPiece = res.data.split("\n");
        const theWord = dataPiece[parseInt(Math.random() * 1000)];
        const word = theWord.split("");
        this.setState({ randWord: word });

        console.log("this array: ", this.state.randWord);
        console.log(word);
        const wordLen = word.length;
        let posX = -(wordLen / 2);
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";

        word.forEach((element) => {
          ctx.beginPath();
          ctx.moveTo(150 + 25 * posX, 140);
          ctx.lineTo(150 + 25 * posX + 15, 140);
          ctx.stroke();
          ctx.closePath();
          this.setState({
            positions: [...this.state.positions, [153 + 25 * posX, 135]],
          });
          //   ctx.font = "100% Comic Sans MS";
          //   ctx.fillStyle = "white";
          //   ctx.fillText(element, 153 + 25 * posX, 135);
          posX = posX + 1;
        });
      });
  };
  //define the draw 400l*200w
  draw() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    console.log(this.state.locations[this.state.wrong]);
    if (this.state.wrong !== 4) {
      ctx.beginPath();
      ctx.moveTo(
        this.state.locations[this.state.wrong][0],
        this.state.locations[this.state.wrong][1]
      );
      ctx.lineTo(
        this.state.locations[this.state.wrong][2],
        this.state.locations[this.state.wrong][3]
      );
      ctx.stroke();
      ctx.closePath();
    }
    if (this.state.wrong === 4) {
      ctx.beginPath();
      ctx.arc(
        this.state.locations[4][0],
        this.state.locations[4][1],
        this.state.locations[4][2],
        this.state.locations[4][3],
        2 * Math.PI
      );
      ctx.stroke();
      ctx.closePath();
    }
    if (this.state.wrong === 10) {
      console.log("Done!");
    }
    // //step 2
    // ctx.beginPath();
    // ctx.moveTo(this.state.locations[1][0], this.state.locations[1][1]);
    // ctx.lineTo(this.state.locations[1][2], this.state.locations[1][3]);
    // ctx.stroke();
    // ctx.closePath();
    // //step 3
    // ctx.beginPath();
    // ctx.moveTo(this.state.locations[2][0], this.state.locations[2][1]);
    // ctx.lineTo(this.state.locations[2][2], this.state.locations[2][3]);
    // ctx.stroke();
    // ctx.closePath();
    // //step 4
    // ctx.beginPath();
    // ctx.moveTo(this.state.locations[3][0], this.state.locations[3][1]);
    // ctx.lineTo(this.state.locations[3][2], this.state.locations[3][3]);
    // ctx.stroke();
    // ctx.closePath();
    //step 5 circle
    // ctx.beginPath();
    // ctx.arc(
    //   this.state.locations[4][0],
    //   this.state.locations[4][1],
    //   this.state.locations[4][2],
    //   this.state.locations[4][3],
    //   2 * Math.PI
    // );
    // ctx.stroke();
    // ctx.closePath();
    // //step 6
    // ctx.beginPath();
    // ctx.moveTo(this.state.locations[5][0], this.state.locations[5][1]);
    // ctx.lineTo(this.state.locations[5][2], this.state.locations[5][3]);
    // ctx.stroke();
    // ctx.closePath();
    // //step 7
    // ctx.beginPath();
    // ctx.moveTo(this.state.locations[6][0], this.state.locations[6][1]);
    // ctx.lineTo(this.state.locations[6][2], this.state.locations[6][3]);
    // ctx.stroke();
    // ctx.closePath();
    // //step 8
    // ctx.beginPath();
    // ctx.moveTo(this.state.locations[7][0], this.state.locations[7][1]);
    // ctx.lineTo(this.state.locations[7][2], this.state.locations[7][3]);
    // ctx.stroke();
    // ctx.closePath();
    // //step 9
    // ctx.beginPath();
    // ctx.moveTo(this.state.locations[8][0], this.state.locations[8][1]);
    // ctx.lineTo(this.state.locations[8][2], this.state.locations[8][3]);
    // ctx.stroke();
    // ctx.closePath();
    // //step 10
    // ctx.beginPath();
    // ctx.moveTo(this.state.locations[9][0], this.state.locations[9][1]);
    // ctx.lineTo(this.state.locations[9][2], this.state.locations[9][3]);
    // ctx.stroke();
    // ctx.closePath();
  }

  checkGuess = () => {
    if (this.state.wrong === 10) {
      return;
    }
    const letter = this.state.myguess;
    const word = this.state.randWord;
    console.log(letter, word);
    if (word.includes(letter)) {
      this.draw_letter(letter, word);
    } else {
      this.setState({ wrong: this.state.wrong + 1 });
      this.draw();
    }
  };
  draw_letter = (letter, word) => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    for (var count = 0; count < word.length; count++) {
      if (letter === word[count]) {
        this.setState({ right: this.state.right + 1 });
        ctx.font = "100% Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.fillText(
          letter,
          this.state.positions[count][0],
          this.state.positions[count][1]
        );
      }
    }
  };
  componentDidMount() {
    this.getWord();
  }
  render() {
    return (
      <div className="Hangman">
        <div>
          <input
            id="letter_input"
            placeholder="Guess One Letter"
            onChange={(e) => this.setState({ myguess: e.target.value })}
          ></input>
          <button
            onClick={this.checkGuess}
            //   this.setState({ count: this.state.count + 1 });
            //   checkGuess();
            // }}
          >
            Guess!
          </button>
          {/* <div>You have Clicked me for {this.state.count}</div>
          <div>You have guessed {this.state.myguess}</div> */}
        </div>
        <canvas id="myCanvas"></canvas>
        {/* <canvas id="myCanvasText"></canvas> */}
      </div>
    );
  }
}

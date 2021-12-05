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
    wrongPos: [
      [200, 20],
      [200, 40],
      [200, 60],
      [200, 80],
      [200, 100],
      [250, 20],
      [250, 40],
      [250, 60],
      [250, 80],
      [250, 100],
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
          posX = posX + 1;
        });
      });
  };
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

    return;
  }

  checkGuess = () => {
    if (this.state.wrong === 10) {
      return (document.getElementById("winOrLose").innerHTML = "You Lose!");
    }
    const letter = this.state.myguess;
    const word = this.state.randWord;
    console.log(letter, word);
    if (word.includes(letter)) {
      this.draw_letter(letter, word);
    } else {
      this.setState({ wrong: this.state.wrong + 1 });
      this.draw();
      this.draw_wrong_letter(letter, word);
    }
    if (this.state.right === this.state.randWord.length) {
      return (document.getElementById("winOrLose").innerHTML = "You Win!");
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
    return;
  };
  draw_wrong_letter = (letter, word) => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    ctx.font = "100% Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.fillText(
      letter,
      this.state.wrongPos[this.state.wrong][0],
      this.state.wrongPos[this.state.wrong][1]
    );
    return;
  };
  componentDidMount() {
    this.getWord();
  }
  render() {
    return (
      <div className="Hangman">
        <div id="winOrLose"></div>
        <div className="inputall">
          <input
            id="letter_input"
            placeholder="Type One"
            onChange={(e) => this.setState({ myguess: e.target.value })}
          ></input>
          <button
            className="bg-warning letter_button"
            onClick={this.checkGuess}
          >
            Guess!
          </button>
        </div>
        <canvas id="myCanvas"></canvas>
      </div>
    );
  }
}

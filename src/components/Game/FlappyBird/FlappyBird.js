import React from 'react';
import './FlappyBird.css'
function FlappyBird() {
  return (
    <div className="container-fluid row main_cards">
      <div className="card bg-dark col-sm-3 flappybird">
        <iframe src="https://scratch.mit.edu/projects/595611981/embed" title="flappy bird" allowtransparency="true"  frameborder="0" scrolling="no" allowfullscreen></iframe>
        <div>
        <p>This Game is produced by Scratch, but it is not finished yet</p>
        <p>游戏是用Scratch做的，但还没有完成。不影响玩~</p>
      </div>
      </div>
      
    </div>
  );
}
export default FlappyBird;

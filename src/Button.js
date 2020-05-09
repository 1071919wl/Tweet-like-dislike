// import React, { Component } from 'react';
//
// const Button =
// class Test extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       total: 0,
//       positive: 0,
//       negative: 0,
//       show: true
//     };
//   }
//
// plus = () => {
//     this.setState({positive: this.state.positive + 1});
//   }
// minus = () => {
//   this.setState({negative: this.state.negative - 1});
// }
//
//
//   render(){
//     return(
//       <div>
//         <button onClick={this.plus}>Like</button>
//         { this.state.show ? <h3>{ this.state.positive }</h3> : ""}
//         <button onClick={this.minus}>Dislike</button>
//         { this.state.show ? <h3>{ this.state.negative }</h3> : ""}
//
//       </div>
//     );
//   }
// }
//
// export default Button

import React, {useState} from "react";

function Button(){
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);


  const Plus = () => {
    setCount1(count1 + 1);
  }

  const Minus = () => {
    setCount2(count2 - 1);
  }

  return (
    <div>
      <button onClick={Plus}>Like</button>
      <p>{count1}</p>
      <button onClick={Minus}>Dislike</button>
      <p>{count2}</p>
    </div>

  )
}

export default Button

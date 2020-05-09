import React from 'react';
import Tweet from './Tweet';



function App() {
  return (
    <div className="app" message="I like turtles.">
      <Tweet name="Will" message="I prefer the weather sunny."/>
      <Tweet name="Bill" message="Anyone looking to buy a used car?"/>
      <Tweet name="Jill" message="Rick and Morty is the best show ever!"/>
      <Tweet name="Nil" message="Pineapples + Pizza"/>

    </div>
  );
}

export default App;

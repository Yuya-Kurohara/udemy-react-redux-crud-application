import React from 'react';
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am click!")}}/>
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <div>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
    </div>
  )
}
const Cat = () => {
  return <div>にゃー!</div>
}
export default App;

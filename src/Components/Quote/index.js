import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './quote.scss'

// const copy = 'your pace is the best pace'.split('');

// class Quote extends Component {
//   render(){
//     return (
//       <div className="quote">
//         <div className="quoteTextBoxContainer">
//           <h1 class="quoteTextBox">
//             {copy.map((letter, i) => (
//               <Parallax
//                   key={`copy-${i}`}
//                   x={[50 * (i - copy.length / 2), 0]}
//                   className='letter'
//               >
//                 { letter === ' '
//                   ? <span>&nbsp;</span>
//                   : letter
//                 }
//               </Parallax>
//             ))}
//           </h1>
//         </div>
//       </div>
//     );
//   }
// }

class Quote extends Component {
  render(){
    return (
      <div className="quote">
        <div className="quoteTextBoxContainer">
          <h1 class="quoteTextBox">
          your pace is the best pace
          </h1>
        </div>
      </div>
    );
  }
}

export default Quote;

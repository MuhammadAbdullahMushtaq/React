// import React from "react"
// import "./style.css"

// function App() {
//   const myName = "Talha";
//   const styleObj = {
//     backgroundColor: "red",
//     color: "white",
//     width: "50%"
//   }
//   return (
//     <>

//       <h1 className="heading" id="heading2" >HELLO {myName} </h1>

//     </>
//   );
// }
// export default App;

import React from "react"
import Header from "./Components/Header.jsx"
import Img from "./Components/ImgComponent.jsx"
import Footer from "./Components/footer.jsx"
import Text from "./Components/textComponent.jsx"

function App() {
  return (
    <>
      <Header />
      <Img />
      <Footer />
      <Text />
    </>
  )
}

export default App
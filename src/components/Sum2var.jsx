import { useState } from "react"

const Sum2var = () => {
  const [numa, setNuma] = useState(0)
  const [numb, setNumb] = useState(0)

  function sum_num_es5(a=0, b=0) {
    return a+b
  }
  
  const sum_num_es6 = (a=0, b=0) => {
    // function abc(){}
    // const abcd = () => {}
    return a+b
  }

  return (
    <>
      <form>
        <input type={"number"} name={"numA"} id={"numA"} onChange={evt => setNuma(parseInt(evt.target.value))}/>
        <input type={"number"} name={"numB"} id={"numB"} onChange={evt => setNumb(parseInt(evt.target.value))}/>
      </form>

      <p>Unuse function {numa+numb}</p>
      <p>Use function (ES5): {sum_num_es5(numa, numb)}</p>
      <p>Use arrow function (ES6): {sum_num_es6(numa, numb)}</p>
      
      {/* <p>{sumnum(5,6)}</p> */}
    </>
  )
}




export default Sum2var

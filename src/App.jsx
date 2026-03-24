import { useState } from "react"

function App() {

  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [message, setMessage] = useState("")


  // const changeHandler1 = (e) => {
  //   // console.log("change1", e.target.value)
  //   setHeight(e.target.value)
  // }

  function submitHandler(e) {
    e.preventDefault()
    console.log("clicked", height, weight)

    const bmiVal = (weight / ((height / 100) ** 2)).toFixed(2)
    console.log("bmiVal", bmiVal)

    if (bmiVal < 18) {
      setMessage(`Bmi Val: ${bmiVal}, You are Under Weight!`)
    }
    else if (bmiVal <= 24) {
      setMessage(`Bmi Val: ${bmiVal}, You are Normal Weight!`)
    }
    else if (bmiVal <= 28) {
      setMessage(`Bmi Val: ${bmiVal}, You are Over Weight!`)
    }
    else {
      setMessage(`Bmi Val: ${bmiVal}, You are Obese!`)
    }

  }

  return (
    <section>
      <video src="https://itsbmicalculator.netlify.app/bgvideo.mp4" autoPlay muted loop></video>
      <div className="main-page">
        <h1>BMI Calculator</h1>
        <form className="form-page" onSubmit={submitHandler}>
          <div>
            <label htmlFor="height">Height(in cm):</label>
            {/* <input type="number" id="height" name="height" placeholder="Enter your height" value={height} required onChange={changeHandler1} 
            /> */}
            <input type="number" id="height" name="height" placeholder="Enter your height" value={height} required onChange={(e) => {
              setHeight(e.target.value)
            }}
            />
          </div>
          <br />
          <div>
            <label htmlFor="weight">weight(in kg):</label>
            <input type="number" id="weight" name="weight" placeholder="Enter your weight" value={weight} required onChange={(e) => setWeight(e.target.value)} />
          </div>
          <button type="submit" className="btn-primary">calculate</button>
        </form>
        <h3 className="result"> {message} </h3>
      </div>
    </section>
  )
}

export default App

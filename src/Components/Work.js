import React from 'react'
import image1 from '../image/1.png'
import image2 from '../image/2.png'
// import image3 from '../image/3.png'
import image4 from '../image/4.png'
// import image5 from '../image/5.png'
import image6 from '../image/6.png'

export default function Work() {
  return (
    <div> <br/> 
       <h3 style={{fontFamily:'cursive'}}>MY WORK </h3> <hr />
      <br/>
 
      <img className='imgwork'src={image1} alt="" /><br />
      <br />
      <h3 style={{fontFamily:'cursive'}}>Calculator (Web App in Javascript)</h3> <hr />
           <h4 style={{fontFamily:'cursive',textAlign:'center',marginLeft:'15%',marginRight:'15%',wordSpacing:'2px'}}>By developing this calculator, I demonstrated
proficiency in JavaScript programming,
problem-solving, and logical thinking. I ensured
that the code is clean, well-structured, and
follows best practices to enhance readability
and maintainability</h4>
 <hr /> 
      <img className='imgwork'src={image2} style={{width:'340px'}}alt="" /><br />
      <br />
      <h3 style={{fontFamily:'cursive'}}>Digital clock ( JavaScript)</h3> <hr />
           <h4 style={{fontFamily:'cursive',textAlign:'center',marginLeft:'15%',marginRight:'15%',wordSpacing:'2px'}}>The Digital Clock web app offers clean and
minimalist design, making it suitable for a
wide range of web applications. Its
lightweight nature ensures efficient
performance, and it can be easily integrated
into existing websites or used as a standalone
application</h4>
 <hr /> 
      <img className='imgwork'src={image4} style={{width:'320px'}}alt="" /><br />
      <br />
      <h3 style={{fontFamily:'cursive'}}>Stop Watch (JavaScript)</h3> <hr />
           <h4 style={{fontFamily:'cursive',textAlign:'center',marginLeft:'15%',marginRight:'15%',wordSpacing:'2px'}}>The Stopwatch Project in JavaScript is an interactive web application that emulates a digital stopwatch. Developed using JavaScript, it provides users with the ability to measure and track elapsed time with precision. </h4>
 <hr /> 
      <img className='imgwork'src={image6}style={{width:'340px'}} alt="" /><br />
      <br />
      <h3 style={{fontFamily:'cursive'}}>NOTE APP (REACT JS )</h3> <hr />
           <h4 style={{fontFamily:'cursive',textAlign:'center',marginLeft:'15%',marginRight:'15%',wordSpacing:'2px'}}>Note App also offers collaborative
functionality, allowing multiple users to
collaborate on notes in real-time. This makes
it an ideal tool for teams or groups who need
to work together on shared projects or
documents. </h4>
 

    </div>
  )
}

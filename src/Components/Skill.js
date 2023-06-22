import React from 'react'
// import pdf from '../image/Ravi tomer (2).pdf'
// import { Link } from 'react-router-dom'
export default function Skill() {
    const skill = [`1 CONCEPT`,'2 DESIGN','3 CODING','4 DEBUGGING','5 LAUNCH','6 REPEAT']
  return (
    <div>
 <hr /><br /><strong style={{fontFamily:'-moz-initial,',letterSpacing:'4px'}}><h3><u>MY DEVELOPMENT  PROCESS</u></h3></strong><br /><hr />
      <div className='flex-container'>
       {skill.map((item,index) => (
          <div className="flex-item" key={index} >
          {item[0]}
          <br />
          {item.slice(2,item.length)}
        </div>
       
       
       ))}  </div> <hr />
       <p style={{fontSize :'20px',fontFamily:'-moz-initial',textAlign:'left',marginRight:'15%',marginLeft:'15%'}}>I am an experienced full-stack web developer proficient in HTML, CSS, JavaScript, and various frameworks such as React and Angular. I am available to take on new projects and provide customized solutions to meet your unique requirements. Contact me for a personalized quote and let's discuss how I can bring your vision to life with responsive design, seamless user experience, and optimized performance. </p>
       <hr /><br /><hr />
       <h3 style={{fontFamily:'cursive'}}>ABOUT MY SKILLS</h3> <hr />
       <h5 style={{fontFamily:'cursive',wordSpacing:'10px'}}>1. HTML5  2. CSS 3. JAVASCRIPT 4. REACT JS 5. NODE JS 6.  MONOGO_DB</h5>   <br />
       <h5 style={{fontFamily:'cursive',wordSpacing:'10px'}}>7. PYTHON  8. JAVA 9. C++ 10. DSA</h5> <br />
       <hr />       
    </div>
  )
}

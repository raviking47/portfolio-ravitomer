import React from "react";
export default function About() {
  return (
    <div>
        <div>
        <fieldset style={{display:"-ms-inline-flexbox"}}>

            <hr />
            <br />
            <hr /><br /> <br /> <br />

        <section >
          <div  style={{transitionDelay: "100ms"}}>
            <h1 style={{textAlign:"left" , marginLeft:"27%",marginTop:"",fontFamily:'-moz-initial'}}>About me</h1>
          </div>
          <hr />
          

            
          <div className="fadeup-enter-done my-4 conntainer"   style={{ transitionDelay:"20ms",textAlign:"left" , marginRight:"10%",marginBottom:'10%'}}>
         
            <h5 className="tex" style={{paddingLeft:'30%',letterSpacing:'2px',wordSpacing:'5px',fontFamily:'-moz-initial'}}>
             
                
            As a Full Stack Developer, I bring a passion for creating
                innovative and intuitive web applications. My technical
                expertise includes proficiency in front-end development using
                HTML, CSS, JavaScript, and React. I am also skilled in back-end
                technologies such as Node.js. <br /> In addition, I have experience
                working with popular databases
                like MySQL, PostgreSQL, and MongoDB. <br /> <br />
                I'm a Data Analyst with a
                passion for transforming complex data sets into insights. My
                expertise includes data modeling, data visualization,
                statistical analysis, and data mining.
       </h5>
          </div>
        
        </section>
      </fieldset>
    </div>
          </div>
  );
}

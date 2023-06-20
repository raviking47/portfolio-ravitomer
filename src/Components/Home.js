import React from 'react'
import image from '../image/HD  .jpg'
export default function Home() {
  return (
    <div>
      <div>
        <fieldset style={{display:"-ms-inline-flexbox"}}>
        <section >
          <div  style={{transitionDelay: "100ms"}}>
            <h4 style={{textAlign:"left" , marginLeft:"10%",marginTop:"15%",fontFamily:'-moz-initial'}}>Hi, my name is</h4>
          </div>
          <div className="fadeup-enter-done" style={{transitionDelay: "100ms"}}>
            <h1 className="my-2" style={{fontSize:"80px",textAlign:"left" , marginLeft:"10%" ,fontFamily:'-moz-initial'}}><u>Ravi Tomer.</u></h1>
          </div>
          <div className="fadeup-enter-done" style={{transitionDelay: "100ms"}}>
            <h3 className="big-heading my-2" style={{textAlign:"left" , marginLeft:"10%",wordSpacing:'5px',fontFamily:'-moz-initial'}}>I build things for the Web and <br />
            Data Science field<datalist>
              
            </datalist>.</h3>
          </div>
          <div className="fadeup-enter-done my-4"   style={{ transitionDelay:"20ms",textAlign:"left" , marginLeft:"10%",marginBottom:'10%'}}>
            
            <h5 style={{paddingRight:'30%',letterSpacing:'2px',wordSpacing:'5px',fontFamily:'-moz-initial'}}>
              <hr />
            <img
                className="imageX"
                  src={image}
                  // style={{marginRight:'20%'}}
                  width={"250px"}
                  // width={'auto'}
                  height={'150px'}
                  alt="txet" 
                
                />
                <br />
                <hr />
            Hello! My name is Ravi Tomer and I enjoy creating things that
            live on the internet. My interest in web development and Data
            Science started back in 2021. I am develop many project like
                Textutils, Notes app ,Calcuator, E-Deshboard and VlabProject (Merge Sort) and  more.
       </h5>
          </div>
        
        </section>
      </fieldset>
    </div>

    </div>
  )
}

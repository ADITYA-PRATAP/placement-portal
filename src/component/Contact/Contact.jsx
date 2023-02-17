import React, {useState} from "react";
import './contact.css';



const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name] : value, 
      }
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My Name is ${data.fullname}.

      number is ${data.phone},
      email is ${data.email} and
        here is what i want to say  ${data.msg}`
    );

  };
  return (
    <>
    <section id="d">
    
     
    
    
      <p className="text-center"> Contact Us</p>
    
    <div id="all">
    <div className="contact_div">
    
      <div className="row">
        <div className="col">
          <form onSubmit={formSubmit}>

  <div>
    <label for="exampleFormControlInput1"  >Full Name </label><br/>
    <input type="text"   class="form-control"  id="exampleFormControlInput1" name="fullname" value={data.fullname}  onChange={InputEvent} placeholder="Name" />
  </div>

  <div   >
    <label for="exampleFormControlInput1"  >Phone Number</label><br/>
    <input type="number"  class="form-control"  id="exampleFormControlInput1"   name="phone"   value={data.phone}  onChange={InputEvent}   placeholder="your Number" />   
  </div>   

  <div   >
    <label for="exampleFormControlInput1"  >Email address</label><br/>
    <input     type="email"     class="form-control"     id="exampleFormControlInput1"     name="email"     value={data.email}     onChange={InputEvent}     placeholder="name@example.com" />
  </div>

  <div class="">
    <label for="exampleFormControlTextarea1"  >Message </label><br/>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"     name="msg"     value={data.msg}     onChange={InputEvent}     placeholder="Message" ></textarea>
  </div>

  <div >
    <button class="btn" > Submit From </button>
  </div>

  </form>
        </div> 
      </div>
    </div>
    </div>
    </section>

    </>
  );
};

export default Contact;

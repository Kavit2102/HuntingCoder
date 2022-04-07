import React , {useState} from "react";
import styles from "../styles/contact.module.css";

const contact = () => {
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const handleOnChange = async (e)=>{
    // console.log(e);
    if(e.target.name == 'name'){
      setName(e.value)
    }    
    if(e.target.name == 'email'){
      setEmail(e.value)
    }    
    if(e.target.name == 'phone'){
      setPhone(e.value)
    }    
    if(e.target.name == 'message'){
      setMessage(e.value)
    }    
    const data = {Name , Phone , Email , Message};
    const jsonString = JSON.stringify(data)
  }

  return (
    <div className={styles.container}>
      <h2>Your Message</h2>
      <form className={styles.form}>
        <div className={styles.input}>
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="name" value={Name} onChange={handleOnChange}/>
        </div>
        <div className={styles.input}>
          <label htmlFor="">Email</label>
          <input type="text" name="email" id="email" value={Email} onChange={handleOnChange}/>
        </div>
        <div className={styles.input}>
          <label htmlFor="">Phone No.</label>
          <input type="number" name="phone" id="phone" value={Phone} onChange={handleOnChange}/>
        </div>
        <div className={styles.input}>
          <label htmlFor="">Message</label>
          <input type="text" name="message" id="message" value={Message} onChange={handleOnChange}/>
        </div>
        <div className={styles.input}>
          <button>Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default contact;

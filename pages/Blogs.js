import React , {useState , useEffect} from "react";
import styles from '../styles/Blogs.module.css'

const Blogs = (props) => {
  console.log(props);
  const [blogs, setblogs] = useState(props.myProps);
  return (
    <div>
      <div className={styles.content}>
        {blogs.map((blogItem,i)=>{
          return (
            <div id={i} className={styles.item}>
              <h3>{blogItem.title}</h3>
              <p>{blogItem.content.substr(0,129)}..... </p>
              <p id="author">By {blogItem.author}</p>  
            </div>
          )
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context){
  let data = await fetch('http://localhost:3000/api/getblog');
  let myProps = await data.json();
  return(
    {props : {myProps}}
  )
  
} 

export default Blogs;

// import styles from './Button.module.css'

function Button(){
     //3. INLINE
    const styles = {
        
            backgroundColor: "hsl(200,100%,50%)",
            color : "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
    }

    //3.
     return(<button style={styles}>Click me</button>);
   
    //2. return(<button className={styles.button}>Click me</button>);
    //1. return(<button className="button">Click me</button>);
}
export default Button
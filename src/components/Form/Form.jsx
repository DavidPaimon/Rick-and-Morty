import { useState } from "react";
import validation from "./Validation";
import styles from "./Form.module.css"

const Form = ({ login }) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
    <div className={styles["form-container"]}>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ color: "white"}}>Email: </label>
            <input className={styles["input-field"]} type="email" name='email' value={userData.email} onChange={handleChange}/>
            {errors.email && <p style={{ color: "white"}}>{errors.email}</p>}
            <hr />
            <label htmlFor="password" style={{ color: "white"}}>Password: </label>
            <input className={styles["input-field"]} type="password" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p style={{ color: "white"}}>{errors.password}</p>}

            <button className={styles.submit}>Submit</button>
        </form>

        <div>
        <img className={styles.portales} src='https://media1.giphy.com/media/Yo2fMrTG6dgLdiKX2z/giphy.gif?cid=6c09b952f32feda613bf47216f283f33816770560ad3150d&rid=giphy.gif&ct=s' alt='not found'/>
        <img className={styles.portales1} src='https://media1.giphy.com/media/Yo2fMrTG6dgLdiKX2z/giphy.gif?cid=6c09b952f32feda613bf47216f283f33816770560ad3150d&rid=giphy.gif&ct=s' alt='not found'/>  
        <img className={styles.cayendo} src='https://media0.giphy.com/media/jSQCODNIa6k5myYjyL/giphy.gif?cid=6c09b95248e6979255796b5f2abe4308629ab832084118a6&rid=giphy.gif&ct=s' alt='not found'/>
        </div>




        </div>
    )
}

export default Form;
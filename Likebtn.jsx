import { useState, useEffect} from "react";
import './Likebtn.css'

const Content = ({name,image}) => {
    const[hasLiked, setHasLiked] = useState(false)
    const[count,setCount] = useState(0);

    useEffect(() => {
    console.log(`${name} has been liked: ${hasLiked}`);
    }, [hasLiked,name]);
    
    const countLikes = () => {
        if(hasLiked){
            setHasLiked(false)
            setCount(count - 1);
        }
        else{
            setHasLiked(true)
            setCount(count + 1)
        }
    }

    return(
        <div className="mycontent">
            <h2>{name}</h2>
            <img src={image} alt={name}/><br/>
            <button type="button" onClick={countLikes}>
                {hasLiked ? "❤️" : "🤍"}
            </button>
            <>{count}{count ===1 ? " like": " likes"}</>

        </div>
    )

}

const Likebtn = () => {
    return(
    <div className="container">
        <h1>Instagram</h1>
        <Content
        name ="Megan Woods"
        image ="/Female.jpeg"
        />
    </div>
    );
}

export default  Likebtn;
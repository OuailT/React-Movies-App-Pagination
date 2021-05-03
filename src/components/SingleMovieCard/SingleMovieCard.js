import React,{useState} from 'react';
import './SingleMovieCard.css';

const SingleMovieCard = ({singleMovie : {id, title,image ,category, likes, dislikes}, removeMovie}) => {

    const [likeCount , setLike] = useState(likes);
    const [dislikeCount, setDislike] = useState(dislikes);

    const [likeState, setLikeState] = useState(false)
    const [dislikeState, setDislikeState] = useState(false)
    const [vote, setVote] = useState(false)

    //Function to toggle the button onclick "Like"
    const likeMovie = () => {
            if(!vote && !likeState) { 
              setLike(likeCount + 1);
                setLikeState(true)
                setVote(true)
            }
            if(vote && likeState) {  
              setLike(likeCount - 1);
                setLikeState(false)
                setVote(false)
            }
          
          } 

    //Function to toggle the button onclick "DisLike"
    const dislikeMovie = () => {
            if(!vote && !dislikeState) {
             
              setDislike(dislikeCount - 1);
                setDislikeState(true)
                setVote(true)

            }
            if(vote && dislikeState) {   
              setDislike(dislikeCount + 1);
                setDislikeState(false)
                setVote(false)
            }
          
          }

    return (

        <section key={id} className="single-movie">
            <img src={image} alt={title}/>
            <footer>
                <div className="movie-info">
                    <h2 className="title">{title}</h2>
                    <h4 className="category">{category}</h4>
                </div>  
            
                <div className="ratio-section">
 
                    <div>
                    <i onClick={likeMovie} className="far fa-thumbs-up"></i>
                    <h5>{likeCount}</h5>
                    </div>
                    
                    <div>
                    <i onClick={dislikeMovie} className="far fa-thumbs-down"></i>
                    <h5>{dislikeCount}</h5>
                    </div>
                </div>

                <button className="btn" onClick={()=> removeMovie(id)}>Delete </button>
                
            </footer>
        </section>
    )
}


export default SingleMovieCard;
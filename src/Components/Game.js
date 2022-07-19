import React, { useEffect ,useState} from 'react'
import "./style.css";

const Game = () => {
    const[list, setList] = useState([]);
   

    useEffect(()=>{
        async function getlist() {
            const response = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json')
            const data = await response.json()
            data.shift();
            setList(data);
            
        }
        getlist();
    },[]);

    // console.log(list)

  return (
    <div>
        <div className = "wrapper">
            
            <div className = "logo">
                <div className = "container">
               
                    <p>Gaming<span>World</span></p>
                </div>
            </div>
            
            <div className = "search-container">
                <div className = "search-element">
                    <h3>Search Game:</h3>
                    <input type = "text" className = "form-control" placeholder="Search Game Title ..." id = "game-search-box" />
                
                </div>
            </div>
        </div>
        <div className='card-container'>
            {
                list.map((ele, index)=>{
                    const {title, platform, genre, score, editors_choice } = ele
                    return (
                        <div className='card' key={index}>
                            <h4>{title}</h4> 
                            <p className='platform'><b>Platform : </b>{platform}</p>
                            <div className='details'>
                                <div className='score-genre'>
                                    <p className='genre'><b>genre : </b> {genre}</p><br/>
                                    <p className='score'><b> score : </b>{score}</p>
                                </div>
                                <p className='editor-choice'><b> editors_choice : </b>{editors_choice}</p>
                            </div>

                        </div>
                                
                    )
                })
            }
        </div>
    </div>
  )
}

export default Game

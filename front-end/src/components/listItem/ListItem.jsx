import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import './listitem.scss';
import axios from 'axios'
import { Link } from 'react-router-dom';


export default function ListItem({index,item}) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
    // const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    // console.log(item)
    // console.log(index)
    useEffect(()=>{
        const getMovie = async () =>{
            try {
                const res = await axios.get('/movies/find/'+item, {
                    headers: { 
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjliZWRiNjQ3MDNjYjI3OTQ1MWJhZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTAxMjkzNSwiZXhwIjoxNjMxNDQ0OTM1fQ.hwX9DDreoIay0CxdhWqn78fQLAmpfPUeZiQYucfwfjk"
                    },
                })
                setMovie(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMovie()
    },[item])
    return (
        <Link to={{pathname: '/watch', movie: movie}}>
        <div className="listItem" style={{left: isHovered && index * 225 - 50 + index * 2.5}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={movie.img}
                   alt="" />
                   {isHovered && (
                       <>
                   <video src={movie.trailer} autoPlay={true} loop/>
                   <div className="itemInfo">
                       <div className="icons">
                           <PlayArrow className="icon"/>
                           <Add className="icon"/>
                           <ThumbUpAltOutlined className="icon"/>
                           <ThumbDownAltOutlined className="icon"/>
                       </div>
                       <div className="itemInfoTop">
                           <span>{movie.duration}</span>
                           <span className="limit">+{movie.limit}</span>
                           <span>{movie.year}</span>
                       </div>
                       <div className="desc">
                           {movie.desc}
                         </div>
                       <div className="genre">{movie.genre}</div>
                   </div>
                   </>
                   )}
        </div>
        </Link>
    )
}

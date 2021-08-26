import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import './listitem.scss';

export default function ListItem({index}) {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div className="listItem" style={{left: isHovered && index * 225 - 50}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
                   alt="" />
                   <div className="itemInfo">
                       <div className="icons">
                           <PlayArrow/>
                           <Add/>
                           <ThumbUpAltOutlined/>
                           <ThumbDownAltOutlined/>
                       </div>
                       <div className="itemInfoTop">
                           <span>1 hour 14 mins</span>
                           <span className="limit">+16</span>
                           <span>1999</span>
                       </div>
                       <div className="desc">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nulla recusandae illum 
                           corrupti repellat laborum dolor culpa porro architecto officia maxime possimus vitae eos
                       </div>
                       <div className="genre">Action</div>
                   </div>
            
        </div>
    )
}

import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import './list.scss'

export default function List({list}) {
    const [sliderNumber, setSlideNumber] = useState(0)
    const [isMoved, setIsMoved] = useState(false)
    const listRef = useRef()
    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === 'left' && sliderNumber > 0) {
            setSlideNumber(sliderNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(direction === 'right' && sliderNumber < 5) {
            setSlideNumber(sliderNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
        console.log(distance)
    }
    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick= { () =>  handleClick("left")} style={{display: !isMoved && 'none'}}  />
                <div className="container" ref={listRef}>
                    {list.content.map((item, i) =>(
                         <ListItem index={i} item={item} key={item.id}/>
                    ))}
                    
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick= { () =>  handleClick("right")}/>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import './home.scss'


const Home = ({type}) => {
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)

    useEffect(() => {
        const getRandomLists = async () => {
                try {
                    const res = await axios.get(`list${type ? "?type=" + type : ''} ${genre ? "&genre=" + genre : ''}`,
                     {
                         headers: { 
                             token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjliZWRiNjQ3MDNjYjI3OTQ1MWJhZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTAxMjkzNSwiZXhwIjoxNjMxNDQ0OTM1fQ.hwX9DDreoIay0CxdhWqn78fQLAmpfPUeZiQYucfwfjk"
                         }
                     }
                     )
                    console.log(res, 'i am here and standing')
                    setLists(res.data)
                   
                } catch (error) {
                   console.log(error, "na him be") 
                }
        }
        getRandomLists()

    },[type,genre])
    return (
        <div className="home">
            <Navbar/>
            <Featured type={type}/>     
            {lists.map((list) => (
                  <List list={list} key={list.id}/> 
            ))} 
                     
           </div>
    )
}

export default Home

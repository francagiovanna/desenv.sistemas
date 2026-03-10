import React, { useState, useEffect } from 'react'

import styles from './Crad.module.css'

export const CardApi = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      //.then(data => setUsers(data))
      const filtrados = data.filter((user)=>{
        use.name.toLowerCase().includes(filtrados.toLowerCase())
      })

      setUsers(filtrados)

  }, [])

  return (
    <>
    
        

    <div className={styles.cardContainerApi} >
        {
            users.map((user)=>(
                <div className={styles.card} key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.address.street}</p>
                </div>
                
            ))
        }
    </div>
    </>
  )
}
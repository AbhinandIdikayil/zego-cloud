import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [roomCode, setRoomCode] = useState('')
  const navigate = useNavigate()
  const handleFormSubmit = (e) => {
    e.preventDefault()
    navigate(`/room/${roomCode}`)
  }

  return (
    <div>
      <form action="">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
          <label style={{ display: 'block' }} htmlFor="">Enter Room Code</label>
          <input type="text"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            required placeholder='Enter room code'
          />
          <button onClick={handleFormSubmit} style={{ display: 'block' }} type={'submit'}>Enter room</button>
        </div>
      </form>
    </div>
  )
}

export default Home
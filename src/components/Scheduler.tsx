import React, { useState } from 'react'

const Scheduler: React.FC = () => {
  const [username, setUsername] = useState('')
  const [time, setTime] = useState('')

  const scheduleTime = () => { }

  return (
    <div>
      <input name='username' type='text' placeholder='username' />
      <select className='time-select' name='time-select'>
        <option value=''>Select a time slot</option>
        <option value='6am'>6:00am</option>
        <option value='7am'>7:00am</option>
        <option value='8am'>8:00am</option>
        <option value='9am'>9:00am</option>
        <option value='10am'>10:00am</option>
        <option value='11am'>11:00am</option>
        <option value='12pm'>12:00pm</option>
        <option value='1pm'>1:00pm</option>
        <option value='2pm'>2:00pm</option>
        <option value='3pm'>3:00pm</option>
        <option value='4pm'>4:00pm</option>
        <option value='5pm'>5:00pm</option>
        <option value='6pm'>6:00pm</option>
        <option value='7pm'>7:00pm</option>
        <option value='8pm'>8:00pm</option>
        <option value='9pm'>9:00pm</option>
        <option value='10pm'>10pm</option>
      </select>
      <button>Confirm</button>
      <button>Cancel</button>
    </div>
  )
}

export default Scheduler
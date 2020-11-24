import React from 'react'

interface Props {
  showLogin: () => boolean | void;
  hideLogin: () => boolean | void;
  displayLogin: boolean;
}

const Header: React.FC<Props> = (Props) => {


  return (
    <div onClick={(event: React.MouseEvent<HTMLElement>) => { Props.hideLogin() }}>
      <button onClick={(event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        Props.showLogin()
      }}>Login to schedule</button>
      Utah County Pickleball

    </div>
  )
}

export default Header
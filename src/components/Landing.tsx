import React from 'react'

interface Props {
  hideLogin: () => boolean | void;
}

const Landing: React.FC<Props> = (Props) => {


  return (
    <div onClick={(event: React.MouseEvent<HTMLElement>) => { Props.hideLogin() }}>Landing.tsx</div>
  )
}

export default Landing
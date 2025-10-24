import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target='_blank'>
            <div className="h-40 overflow-hidden w-44 bg-white">
              <img className="h-full w-full" src={props.elem.download_url} alt="" />
            </div>

            <h2 className="font-bold text-lg text-center">{props.elem.author}</h2>
          </a>
    </div>
  )
}

export default Card

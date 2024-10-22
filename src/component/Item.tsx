import React from 'react'

type Props = {
    image: string;
    text: string,
}

export default function Item({image, text}: Props) {
  return (
    <>
    <div className='flex border rounded-lg w-96 items-center space-x-5 p-2 mt-6 ml-3'>
    <img className='w-20 h-20 rounded-xl 
    ' src={image} alt="" />
    <div>
        <p>{text}</p>
        <p>Flights . Hotels . Resorts</p>
    </div> 
    </div>
    </>
  )
}
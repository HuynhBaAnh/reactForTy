import React from 'react'

type Props = {
    content: string,
    icon?: string,
    dieukien: boolean,

}

export default function Button({ content, icon, dieukien }: Props) {
  return (
    <button className={` border rounded-md ${dieukien? 'hover:bg-pink-500 bg-yellow-400' : 'hover:bg-blue-500  bg-purple-700'}`}>{icon} {content} </button>

  )
}
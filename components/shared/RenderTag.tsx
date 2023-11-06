import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Badge } from '../ui/badge'

interface Props{
    _id: number , 
    name:string , 
    count?: number ,
    showCount?: boolean
}

const RenderTag = ({ _id , name , count , showCount}: Props) => {
  return (
        <Link href={`/tags/${_id}`} className='flex justify-between gap-2 '>
            <Badge className='background-light800_dark300 text-dark400_light500 rounded-md border-none subtle-medium px-4 py-2 uppercase' >{name }</Badge>
            { count && (
                <p className='small-medium text-dark500_light700'>{count}</p>
            )
            }
        </Link> 
  )
}

export default RenderTag
import Link from 'next/link';

import Image  from "next/image"
import { Button } from '../ui/button';
import RenderTag from './RenderTag';

const RightSidbar = () => {
  const hotQuestions = [
    {_id:1 , title: 'how do i use express as custom server in Nextjs?'} , 
    {_id:2 , title: 'how do i use express as custom server in Nextjs?'} , 
    {_id:3 , title: 'how do i use express as custom server in Nextjs?'} , 
    {_id:4 , title: 'how do i use express as custom server in Nextjs?'} , 
  ]

  const popularTags = [
    {_id:1 , tag: 'javascript' , count:1400},
    {_id:2 , tag: 'Nextjs' , count:1400},
    {_id:3 , tag: 'html' , count:2500},
    {_id:4 , tag: 'css', count:3200},
    {_id:5 , tag: 'react', count:3200},
    {_id:6 , tag: 'nodejs', count:3200},
  ]
  return (
    <section className=' background-light900_dark200 light-border sticky  right-0 top-0 flex h-screen w-[350px] flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden '>
<div className=''>
 <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
 <div className='mt-7 flex flex-col w-full gap-[30px]'>
 {
  hotQuestions.map(item=>(
   <Link 
      href={`/questions/${item._id}`}
      key={item._id}
      className='flex cursor-pointer items-center justify-between gap-7'> 
      <p className="body-medium text-dark500_light700">{item.title}</p>
      <Image 
        src="/assets/icons/chevron-right.svg" 
        alt="right" 
        width={20} 
        height={20}
        className="invert-colors"
        />
   </Link>
  ))
 }

 </div>
</div>
<div className='mt-16'>
 <h3 className="h3-bold text-dark200_light900"> Popular Tags</h3>
 <div className="mt-7 flex flex-col w-full gap-[30px]">
    {popularTags.map(tag=>(
      <RenderTag
        key={tag._id}
        _id={tag._id}
        name={tag.tag}
        count={tag.count}
        showCount
      />
    ))}
 </div>
</div>

    </section>
  )
}

export default RightSidbar
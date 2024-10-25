import { FormEvent, useState } from 'react'
import star from '../../images/icon-star.svg'
import thankYou from '../../images/illustration-thank-you.svg'
import { motion } from "framer-motion"

const Rating = () => {
  const [isRate, setIsRate]= useState<boolean>(true)
  const handleSetIsRate = (e:FormEvent)=>{
    e.preventDefault();
    setIsRate(!isRate)
  } 
  const[rate,setRate]=useState<number>(0)
  const handleSelectedRating=(rating:number)=>{
    setRate(rating)
  }
  return (
    <>
    {isRate?(
    <motion.form 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:3}}
    exit={{opacity:0}}
    onSubmit={handleSetIsRate} className="container">
      <div className='starContainer'>
          <img src={star} alt="" />
      </div>
      <h1>How did we do?</h1>
      <p>Please let us know how we did with your supoport request. All feedback is appreciated to help us improve our offering!</p>
      <div className='buttonContainer'>
          {[1,2,3,4,5].map(num=>(
              <button onClick={()=>handleSelectedRating(num)} type='button'>{num}</button>
          ))}
      </div>
      <button type='submit' className='submit'>submit</button>
  </motion.form>
    ):(
      <motion.div
      initial={{scale:0}}
      animate={{scale:1}}
      exit={{scale:0}}
      transition={{duration:3}}
      className="container thankYou">
          <img src={thankYou} alt="" />
         
              <p className='selectedRate'>You selected {rate} out of 5</p>
          
          <h1>Thank you!</h1>
          <p>we appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </motion.div>
    )}
    </>
  )
}

export default Rating
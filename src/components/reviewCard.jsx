import {star} from '../assets/icons'

const reviewCard = ({imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img 
        src={imgURL} 
        alt={customerName}
        width={120}
        height={120}
        className="rounded-full object-cover"/>
        <p className='info-text my-3 max-w-sm text-center'>{feedback}</p>
        <div className='mt-3 flex justify-center items-center gap-2.5'>
            <img 
            src={star}
            width={24}
            height={24}
            className="object-contain m-0"
            />
            <p className='font-montserrat text-xl text-slate-gray'>{rating}</p>
        </div>
        <h3 className='mt-1 font-palanquin text-center text-3xl font-bold'>{customerName}</h3>
    </div>
  )
}

export default reviewCard
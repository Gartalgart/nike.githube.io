const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage}) => {
    const handleClick = () => {
        if(bigShoeImage !== imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }

  return (
    <div className='rounded-xl cursor-pointer max-sm:flex-1'
    onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center bg-cover
        sm:w-40 sm:h-40 rounded-xl max-sm:p-4 hover:scale-110 transition duration-75 
        ease-in-out hover:border-[1px] border-coral-red">
            <img
                src={imgURL.thumbnail}
                alt="shoe collection"
                width={127}
                height={103}
                className="object-cover"
            />
        </div>
    
    </div>
  )
}

export default ShoeCard
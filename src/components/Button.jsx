const Button = ({ label, iconURL, backgroundColor, borderColor, textColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7
     py-4 my-3 border font-montserrat text-lg leading-none hover:font-semibold
      ${
        backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}`
        : 'bg-coral-red text-white'
      } rounded-full w-full'}`}>
        {label}   
        {iconURL && <img
            src={iconURL}
            alt="Arrow right icon"
            className="ml-2 rounded-full w-5 h-5" 
        />}
    </button>
  )
}

export default Button
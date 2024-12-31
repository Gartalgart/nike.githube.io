import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section 
    id="contact-us"
    className="max-container flex justify-between items-center
    max-lg:flex-col gap-10 max-mobile:text-center"
    >
      <h3 className="font-palanquin text-4xl leading-[68px] max-lg:flex-col
       font-bold">
        Sign Up for 
          <span className="text-coral-red"> Updates </span>
        & Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center
       max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray
      rounded-full'>
        <input 
        type="text"
        placeholder="subscribe@nike.com"
        className="input"
        />
        <div className='flex max-sm:justify-end max-mobile:justify-center 
        items-center max-sm:w-full'>
          <Button label="Sign Up" fullWidth/>
        </div>
      </div>

    </section>
  )
}

export default Subscribe
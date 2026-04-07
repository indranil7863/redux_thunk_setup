import  { useState } from 'react'

export const Create = () => {
  const [formData, setFormData] = useState({})
    const getData = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(formData);
    }
  
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
        // api call to post the data to the store
    }


  return (
    <div className='w-[70%] mx-auto mt-2 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] rounded-[5px]'>
      <form className='flex flex-col gap-2 p-4' onSubmit={handleSubmit}>
        <div className='flex items-center gap-2'>
          <label htmlFor="name">Name</label>
          <input className='px-2 py-3 w-full outline-none bg-gray-200 rounded-[5px]' name='name' type="text" onChange={getData} />
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor="email">Email</label>
          <input className='px-2 py-3 w-full outline-none bg-gray-200 rounded-[5px]' type="text" id="email" name='email' onChange={getData} />
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor="age">Age</label>
          <input className='px-2 py-3 w-full outline-none bg-gray-200 rounded-[5px]' type="number" id="age" name='age' onChange={getData} />
        </div>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="gender" value="male" onChange={getData} className="accent-blue-500" />
            Male
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="gender" value="female" onChange={getData} className="accent-pink-500" />
            Female
          </label>
        </div>
        <button type="submit" className='bg-blue-400 rounded-[5px] py-2 hover:bg-blue-300'>Submit</button>

      </form>
    </div>
  )
}

import React from 'react'

const Form = () => {
  return (
    <form action="POST" name='contact v1' data-netlify='true'>
        <input type="hidden" name='form-name' value='contact v1' />
        <div className='mb-4'>
            <label htmlFor="name" className='mb-2 inline-block font-semibold'>Nama</label>
            <input className='h-[45px] w-full rounded-sm bg-slate-900 dark:bg-slate-400 text-white dark:text-black pl-4' type="text" id='name' name='name' required />
        </div>
        <div className='mb-4'>
            <label htmlFor="email" className='mb-2 inline-block font-semibold'>Email</label>
            <input className='h-[45px] w-full rounded-sm bg-slate-900 dark:bg-slate-400 text-white dark:text-black pl-4' type="email" id='email' name='email' required />
        </div>
        <div className='mb-4'>
            <label htmlFor="pesan" className='mb-2 inline-block font-semibold'>Pesan</label>
            <textarea name="pesan" id="pesan" placeholder='Masukkan Pesan' className='w-full rounded-sm bg-slate-900 dark:bg-slate-400 text-white dark:text-black pl-4' cols={30} rows={10}></textarea>
        </div>
        <button className='px-6 py-3 inline-block capitalize font-semibold rounded-md cursor-pointer text-white dark:text-black bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-400'>Kirim Pesan</button>
    </form>
  )
}

export default Form
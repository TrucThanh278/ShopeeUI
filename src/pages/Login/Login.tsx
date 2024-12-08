import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm'>
              <div className='text-2xl'>Đăng nhập</div>
              <div className='mt-3'>
                <input
                  type='email'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='Email'
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1rem]'></div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='Password'
                  autoComplete='on'
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1rem]'></div>
              </div>
              <button
                className='mt-3 w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'
                type='submit'
              >
                Đăng nhập
              </button>
              <div className='flex items-center justify-center mt-8'>
                <span className='text-slate-400'>Bạn chưa có tài khoản?</span>
                <Link className='text-red-400 ml-2' to={'/register'}>
                  Đăng kí
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

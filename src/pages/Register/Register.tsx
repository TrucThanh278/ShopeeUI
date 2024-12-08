import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { getRules, schema, Schema } from '../../utils/rule'
import Input from '../../components/Input/Input'
import { yupResolver } from '@hookform/resolvers/yup'

// interface FormData {
//   email: string
//   password: string
//   confirm_password: string
// }

type FormData = Schema

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<FormData>({ resolver: yupResolver(schema) })

  // const rules = getRules(getValues)

  const onSubmit = handleSubmit(
    (data) => {
      // console.log('>>>>>>', data)
    },
    (error) => {
      console.log('>>>>>> error', error)
    }
  )

  // // const email = watch('email')
  // const email = getValues('email')

  // console.log('>>>>>> email', email)

  // console.log(123)

  // console.log('>>>>>>', errors)
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng kí</div>
              <Input
                name='email'
                register={register}
                type='email'
                className='mt-2'
                errorMessage={errors.email?.message}
                placeholder='example@gmail.com'
              />

              <Input
                name='password'
                register={register}
                type='password'
                className='mt-2'
                errorMessage={errors.password?.message}
                placeholder='Password'
              />

              <Input
                name='confirm_password'
                register={register}
                type='password'
                className='mt-2'
                errorMessage={errors.confirm_password?.message}
                placeholder='Confirm password'
              />

              <button
                type='submit'
                className='mt-2 w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'
              >
                Đăng kí
              </button>
              <div className='flex items-center justify-center mt-8'>
                <span className='text-slate-400'>Bạn đã có tài khoản?</span>
                <Link className='text-red-400 ml-2' to={'/login'}>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { LoginSchema, schema } from '../../utils/rule'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { loginAccount } from '../../apis/auth.api'
import { isAxiosUnprocessableEntityAxiosError } from '../../utils/utils'
import { ErrorResponse } from '../../types/utils.type'
import Input from '../../components/Input/Input'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'
import Button from '../../components/Button'

type FormData = LoginSchema

const loginSchema = schema.omit(['confirm_password'])

export default function Login() {
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormData>({ resolver: yupResolver(loginSchema) })

  const loginAccountMutation = useMutation({
    mutationFn: (body: FormData) => loginAccount(body) // call API
  })

  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityAxiosError<ErrorResponse<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng nhập</div>
              <div className='mt-3'>
                <Input
                  name='email'
                  register={register}
                  type='email'
                  className='mt-2'
                  errorMessage={errors.email?.message}
                  placeholder='example@gmail.com'
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1rem]'></div>
              </div>
              <div className='mt-3'>
                <Input
                  name='password'
                  register={register}
                  type='password'
                  className='mt-2'
                  errorMessage={errors.password?.message}
                  placeholder='Password'
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1rem]'></div>
              </div>
              <Button
                className='mt-3 w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600 relative flex items-center justify-center'
                type='submit'
                isLoading={loginAccountMutation.isPending}
                disabled={loginAccountMutation.isPending}
              >
                Đăng nhập
              </Button>
              <div className='flex items-center justify-center mt-8'>
                <span className='text-slate-400'>Bạn chưa có tài khoản?</span>
                <Link className='text-red-400 ml-2' to={'/register'}>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

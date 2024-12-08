import { type RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

type formData = {
  email: string
  password: string
  confirm_password: string
}

// type Rules = {
//   [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions<formData, key>
// }

type Rules = {
  [key in keyof formData]?: RegisterOptions<formData, key>
}

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Vui lòng nhập email!'
    },
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: 'Vui lòng nhập email đúng định dạng!'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5 - 160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 5 - 160 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Vui lòng nhập password!'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 - 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6 - 160 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Vui lòng nhập lại password!'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 - 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6 - 160 ký tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Xác nhận mật khẩu không khớp !'
        : undefined
  }
})

export const schema = yup.object({
  email: yup
    .string()
    .required('Vui lòng nhập email!')
    .email('Vui lòng nhập email đúng định dạng!')
    .min(5, 'Độ dài từ 5 - 160 ký tự')
    .max(160, 'Độ dài từ 5 - 160 ký tự'),
  password: yup
    .string()
    .required('Vui lòng nhập password!')
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự'),
  confirm_password: yup
    .string()
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự')
    .oneOf([yup.ref('password')], 'Nhập lại password không khớp!')
})

export type Schema = yup.InferType<typeof schema>

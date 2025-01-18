import { InputHTMLAttributes } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

// interface Props {
//   type: React.HTMLInputTypeAttribute
//   errorMessage?: string
//   placeholder?: string
//   className?: string
//   name: string
//   register: UseFormRegister<any>
//   rules?: RegisterOptions<any>
// }

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions<any>
}

export default function Input({
  className,
  type,
  errorMessage,
  placeholder,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  classNameError = 'mt-1 text-red-600 text-sm min-h-[1.25rem]',
  name,
  register,
  rules,
  autoComplete
}: Props) {
  const registerResult = register && name ? register(name, rules) : {}
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        {...registerResult}
        autoComplete={autoComplete}
        className={classNameInput}
      />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}

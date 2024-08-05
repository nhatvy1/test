import { InputHTMLAttributes, forwardRef } from 'react'

interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, ICustomInput>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className='block w-full mt-2 outline-none border rounded-md p-2'
    />
  )
})

Input.displayName = 'Input'

export default Input

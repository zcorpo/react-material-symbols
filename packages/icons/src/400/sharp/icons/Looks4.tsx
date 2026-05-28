import type { SVGProps, JSX } from 'react'

export default function Looks4({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Zm355-97h60v-406h-60v171H425v-171h-60v231h170v175Z" />
    </svg>
  )
}

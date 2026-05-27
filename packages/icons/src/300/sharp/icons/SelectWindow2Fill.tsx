import type { SVGProps, JSX } from 'react'

export default function SelectWindow2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M814.61-381.46V-692H258.23v-168H860v478.54h-45.39ZM100-100v-518.92h641.54V-100H100Z" />
    </svg>
  )
}

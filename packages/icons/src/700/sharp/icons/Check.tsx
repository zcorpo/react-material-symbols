import type { SVGProps } from 'react'

export default function Check({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M378-222 130-470l68-68 180 180 383-383 68 68-451 451Z" />
    </svg>
  )
}

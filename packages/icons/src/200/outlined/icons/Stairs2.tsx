import type { SVGProps } from 'react'

export default function Stairs2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-240v-30.77h229.58v-224.61h229.57V-720H840v30.77H610.42v224.61H380.85V-240H120Z" />
    </svg>
  )
}

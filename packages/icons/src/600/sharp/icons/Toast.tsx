import type { SVGProps, JSX } from 'react'

export default function Toast({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M245.09-245.09h469.82v-60H245.09v60ZM105.87-105.87V-854.7H854.7v748.83H105.87Zm79.22-79.22h589.82v-589.82H185.09v589.82Zm0 0v-589.82 589.82Z" />
    </svg>
  )
}

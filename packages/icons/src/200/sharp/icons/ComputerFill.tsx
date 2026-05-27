import type { SVGProps } from 'react'

export default function ComputerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M70.77-181.54v-30.77h818.46v30.77H70.77Zm49.23-80v-520h720v520H120Z" />
    </svg>
  )
}

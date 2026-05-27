import type { SVGProps, JSX } from 'react'

export default function AlignEnd({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-30.77h720V-120H120Zm184.62-424.62v-70.76h350.76v70.76H304.62Zm0 240v-70.76h350.76v70.76H304.62Z" />
    </svg>
  )
}

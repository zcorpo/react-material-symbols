import type { SVGProps, JSX } from 'react'

export default function AlignVerticalTop({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M312.31-140v-537.69h72.31V-140h-72.31Zm263.07-240v-297.69h72.31V-380h-72.31ZM120-790v-30.77h720V-790H120Z" />
    </svg>
  )
}

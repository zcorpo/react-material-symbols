import type { SVGProps } from 'react'

export default function ChipsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M247-452h466v-60H247v60ZM120-120v-720h720v720H120Z" />
    </svg>
  )
}

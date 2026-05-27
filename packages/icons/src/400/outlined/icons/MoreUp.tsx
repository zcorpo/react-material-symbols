import type { SVGProps } from 'react'

export default function MoreUp({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M700-320v-380H320v-60h440v440h-60ZM500-120v-380H120v-60h440v440h-60Z" />
    </svg>
  )
}

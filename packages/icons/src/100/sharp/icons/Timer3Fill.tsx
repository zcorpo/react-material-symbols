import type { SVGProps } from 'react'

export default function Timer3Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M369-246v-16h246v-210H410v-16h205v-210H369v-16h262v226l-8 9 8 7v226H369Z" />
    </svg>
  )
}

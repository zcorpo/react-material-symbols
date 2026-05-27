import type { SVGProps } from 'react'

export default function BorderOuter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-180h600v-600H180v600Zm-60 60v-720h720v720H120Zm165-330v-60h60v60h-60Zm165 165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm165 165v-60h60v60h-60Z" />
    </svg>
  )
}

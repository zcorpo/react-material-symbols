import type { SVGProps } from 'react'

export default function StraightenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-240v-480h190v240h60v-240h120v240h60v-240h120v240h60v-240h190v480H80Z" />
    </svg>
  )
}

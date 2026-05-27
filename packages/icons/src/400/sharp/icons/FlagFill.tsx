import type { SVGProps } from 'react'

export default function FlagFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-120v-680h343l19 86h238v370H544l-19-85H260v309h-60Z" />
    </svg>
  )
}

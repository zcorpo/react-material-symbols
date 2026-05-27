import type { SVGProps } from 'react'

export default function BookmarkFlagFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M364-405h65v-111h172l-61.25-83L601-681H364v276ZM175-82v-789h611v789L480-212.17 175-82Z" />
    </svg>
  )
}

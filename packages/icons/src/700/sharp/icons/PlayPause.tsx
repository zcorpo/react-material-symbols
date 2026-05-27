import type { SVGProps } from 'react'

export default function PlayPause({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M148-299v-362l268 181-268 181Zm375 11v-384h94v384h-94Zm194 0v-384h95v384h-95Z" />
    </svg>
  )
}

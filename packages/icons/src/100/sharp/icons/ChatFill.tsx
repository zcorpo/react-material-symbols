import type { SVGProps } from 'react'

export default function ChatFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-180v-648h696v536H244L132-180Zm134-246h266v-22H266v22Zm0-123h428v-22H266v22Zm0-123h428v-22H266v22Z" />
    </svg>
  )
}

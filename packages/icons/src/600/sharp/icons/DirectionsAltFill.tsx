import type { SVGProps } from 'react'

export default function DirectionsAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-29.09 29.09-480 480-930.91 930.91-480 480-29.09ZM480-283l197-197-197-197-43 43 124 124H283v60h278L437-326l43 43Z" />
    </svg>
  )
}

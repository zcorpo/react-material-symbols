import type { SVGProps } from 'react'

export default function InkEraserOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M813-61 605-269 503-160H179L58-285l255-276L61-813l43-43 752 752-43 43ZM688-358 395-651l200-218 288 302-195 209Z" />
    </svg>
  )
}

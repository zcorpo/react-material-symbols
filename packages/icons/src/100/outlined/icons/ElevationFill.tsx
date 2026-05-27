import type { SVGProps } from 'react'

export default function ElevationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m167-214 183-256h200l222-259v515H167Zm-21-166-18-13 147-205h200l178-208 17 15-185 215H286L146-380Z" />
    </svg>
  )
}

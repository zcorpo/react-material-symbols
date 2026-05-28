import type { SVGProps, JSX } from 'react'

export default function ThumbDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M29.26-336.48v-165.48l156.48-362.91H719v528.39L447.78-54.7l-73.82-54.61 51.43-227.17H29.26Zm749.74 0v-528.39h120.78v528.39H779Z" />
    </svg>
  )
}

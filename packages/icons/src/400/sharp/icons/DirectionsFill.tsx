import type { SVGProps, JSX } from 'react'

export default function DirectionsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-360h60v-130h184v85l116-115-116-116v86H320v190ZM480-50 50-480l430-430 430 430L480-50Z" />
    </svg>
  )
}

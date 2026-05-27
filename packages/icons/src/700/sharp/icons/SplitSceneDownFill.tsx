import type { SVGProps, JSX } from 'react'

export default function SplitSceneDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-587v-279h691v279H135Zm0 492v-338H55v-94h851v94h-80v338H135Z" />
    </svg>
  )
}

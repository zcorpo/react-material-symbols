import type { SVGProps, JSX } from 'react'

export default function SplitSceneDown({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-587v-279h691v279h-95v-184H229v184h-94Zm0 492v-338H55v-94h851v94h-80v338H135Zm94-676h502-502Z" />
    </svg>
  )
}

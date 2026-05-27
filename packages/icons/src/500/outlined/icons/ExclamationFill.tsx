import type { SVGProps, JSX } from 'react'

export default function ExclamationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M445.93-377.37V-765.5h68.14v388.13h-68.14Zm0 182.87v-68.13h68.14v68.13h-68.14Z" />
    </svg>
  )
}

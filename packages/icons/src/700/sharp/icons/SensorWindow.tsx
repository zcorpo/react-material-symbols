import type { SVGProps, JSX } from 'react'

export default function SensorWindow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M143-63v-834h674v834H143Zm94-464h156v-40h174v40h156v-276H237v276Zm0 94v276h486v-276H237Zm0 276h486-486Z" />
    </svg>
  )
}

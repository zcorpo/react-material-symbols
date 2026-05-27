import type { SVGProps, JSX } from 'react'

export default function SensorWindow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-133v-694h536v694H212Zm22-358h195v-28h102v28h195v-314H234v314Zm0 22v314h492v-314H234Zm0 314h492-492Z" />
    </svg>
  )
}

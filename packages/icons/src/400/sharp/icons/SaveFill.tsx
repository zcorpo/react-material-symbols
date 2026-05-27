import type { SVGProps, JSX } from 'react'

export default function SaveFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M840-683v563H120v-720h563l157 157ZM553.5-275.26q30.5-30.27 30.5-73.5 0-43.24-30.26-73.74-30.27-30.5-73.5-30.5-43.24 0-73.74 30.26-30.5 30.27-30.5 73.5 0 43.24 30.26 73.74 30.27 30.5 73.5 30.5 43.24 0 73.74-30.26ZM233-584h358v-143H233v143Z" />
    </svg>
  )
}

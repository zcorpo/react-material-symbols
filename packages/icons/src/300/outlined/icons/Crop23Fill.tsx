import type { SVGProps } from 'react'

export default function Crop23Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M317.69-100q-23.61 0-40.65-17.04T260-157.69v-644.62q0-23.61 17.04-40.65T317.69-860h324.62q23.61 0 40.65 17.04T700-802.31v644.62q0 23.61-17.04 40.65T642.31-100H317.69Z" />
    </svg>
  )
}

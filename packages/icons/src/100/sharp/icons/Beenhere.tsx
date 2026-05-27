import type { SVGProps } from 'react'

export default function Beenhere({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-104 212-305v-523h536v523L480-104Zm0-29 246-185v-488H234v488l246 185Zm-42-263 190-190-16-15-174 174-91-91-15 16 106 106Zm42-410H234h492-246Z" />
    </svg>
  )
}

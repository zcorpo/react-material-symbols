import type { SVGProps } from 'react'

export default function TypeSpecimen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M379-374h24l46-110h157l46 110h27L532-734h-8L379-374Zm79-132 67-172h4l69 172H458ZM254-280v-548h548v548H254Zm22-22h504v-504H276v504ZM158-184v-516h22v494h494v22H158Zm118-622v504-504Z" />
    </svg>
  )
}

import type { SVGProps, JSX } from 'react'

export default function TabClose({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m444-455 84-84 84 84 15-15-84-84 84-84-15-15-84 84-84-84-15 15 84 84-84 84 15 15ZM254-280v-548h548v548H254Zm22-22h504v-504H276v504ZM158-184v-516h22v494h494v22H158Zm118-118v-504 504Z" />
    </svg>
  )
}

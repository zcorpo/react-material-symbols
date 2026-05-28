import type { SVGProps, JSX } from 'react'

export default function StackHexagonFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m569-396 151-87v-172l-151-87-151 87v172l151 87ZM154-74 74-691l124-14v507h608l9 45-661 79Zm104-184v-622h622v622H258Z" />
    </svg>
  )
}

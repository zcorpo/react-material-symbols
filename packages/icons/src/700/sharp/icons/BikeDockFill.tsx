import type { SVGProps } from 'react'

export default function BikeDockFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-94l188-52 65-625h264l65 625 189 52v94H95Zm344-139h80v-537h-80v537Z" />
    </svg>
  )
}

import type { SVGProps } from 'react'

export default function FloorLampFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M470-200v-320H257l80-256h288l80 256H492v320h-22Zm-120 68v-22h262v22H350Z" />
    </svg>
  )
}

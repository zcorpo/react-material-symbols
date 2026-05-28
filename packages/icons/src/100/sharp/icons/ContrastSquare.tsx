import type { SVGProps, JSX } from 'react'

export default function ContrastSquare({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm22-22h572v-572L194-194Zm68-400h79v79h25v-79h79v-25h-79v-79h-25v79h-79v25Zm429 256H515v-25h176v25Z" />
    </svg>
  )
}

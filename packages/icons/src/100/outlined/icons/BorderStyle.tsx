import type { SVGProps, JSX } from 'react'

export default function BorderStyle({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M318-172v-34h34v34h-34Zm145 0v-34h34v34h-34Zm146 0v-34h34v34h-34Zm145 0v-34h34v34h-34Zm0-146v-34h34v34h-34Zm0-145v-34h34v34h-34Zm0-146v-34h34v34h-34ZM172-172v-616h616v22H194v594h-22Z" />
    </svg>
  )
}

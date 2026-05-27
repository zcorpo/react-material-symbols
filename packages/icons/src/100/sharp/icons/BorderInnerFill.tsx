import type { SVGProps } from 'react'

export default function BorderInnerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-34h34v34h-34Zm0-146v-34h34v34h-34Zm0-291v-34h34v34h-34Zm0-145v-34h34v34h-34Zm146 582v-34h34v34h-34Zm0-582v-34h34v34h-34Zm291 582v-34h34v34h-34Zm145 0v-34h34v34h-34Zm0-146v-34h34v34h-34Zm0-291v-34h34v34h-34Zm0-145v-34h34v34h-34Zm-145 0v-34h34v34h-34ZM469-172v-297H172v-22h297v-297h22v297h297v22H491v297h-22Z" />
    </svg>
  )
}

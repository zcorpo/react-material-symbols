import type { SVGProps, JSX } from 'react'

export default function DevicesFoldFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M423-172v-626l216-98v108h189v616H423Zm17-22h366v-572H639v483l-199 89ZM132-754v-34h34v34h-34Zm0 582v-34h34v34h-34Zm0-146v-34h34v34h-34Zm0-145v-34h34v34h-34Zm0-146v-34h34v34h-34Zm146-145v-34h34v34h-34Zm0 582v-34h34v34h-34Z" />
    </svg>
  )
}

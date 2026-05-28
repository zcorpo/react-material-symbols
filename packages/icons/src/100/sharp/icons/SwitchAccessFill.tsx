import type { SVGProps, JSX } from 'react'

export default function SwitchAccessFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M318-318v-325h325v325H318Zm-146 0v-34h34v34h-34Zm0-291v-34h34v34h-34Zm146 437v-34h34v34h-34Zm0-582v-34h34v34h-34Zm291 582v-34h34v34h-34Zm0-582v-34h34v34h-34Zm145 436v-34h34v34h-34Zm0-291v-34h34v34h-34Z" />
    </svg>
  )
}

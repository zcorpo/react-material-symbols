import type { SVGProps, JSX } from 'react'

export default function HighDensityFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-318v-470h471v470H172Zm0 146v-34h34v34h-34Zm146 0v-34h34v34h-34Zm145 0v-34h34v34h-34Zm146 0v-34h34v34h-34Zm145 0v-34h34v34h-34Zm0-146v-34h34v34h-34Zm0-145v-34h34v34h-34Zm0-146v-34h34v34h-34Zm0-145v-34h34v34h-34Z" />
    </svg>
  )
}

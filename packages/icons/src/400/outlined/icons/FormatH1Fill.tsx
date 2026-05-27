import type { SVGProps, JSX } from 'react'

export default function FormatH1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-280v-400h60v170h180v-170h60v400h-60v-170H260v170h-60Zm500 0v-340h-80v-60h140v400h-60Z" />
    </svg>
  )
}

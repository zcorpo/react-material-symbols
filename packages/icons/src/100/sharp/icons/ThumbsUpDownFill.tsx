import type { SVGProps, JSX } from 'react'

export default function ThumbsUpDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M26-438v-308l188-188 19 20-38 168h259v75L352-438H26ZM746-26l-19-21 38-167H506v-75l102-233h326v308L746-26Z" />
    </svg>
  )
}

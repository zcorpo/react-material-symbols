import type { SVGProps, JSX } from 'react'

export default function StartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-266v-428h22v428h-22Zm493-11-16-15 177-177H260v-22h525L610-669l15-14 203 203-203 203Z" />
    </svg>
  )
}

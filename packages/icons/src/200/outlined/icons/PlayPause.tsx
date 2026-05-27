import type { SVGProps, JSX } from 'react'

export default function PlayPause({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M220-359.69v-240.62L396.15-480 220-359.69ZM549.23-340v-280H580v280h-30.77Zm160 0v-280H740v280h-30.77Z" />
    </svg>
  )
}

import type { SVGProps } from 'react'

export default function FullscreenPortrait({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M328-248h304v-464H328v464Zm420 116H212v-696h536v696Zm-22-22v-652H234v652h492Zm0-652H234h492Z" />
    </svg>
  )
}

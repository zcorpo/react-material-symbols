import type { SVGProps, JSX } from 'react'

export default function FloatPortrait2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M328-503h249v-209H328v209Zm420 371H212v-696h536v696Zm-22-22v-652H234v652h492Zm0-652H234h492Z" />
    </svg>
  )
}

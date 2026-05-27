import type { SVGProps } from 'react'

export default function SplitscreenPortrait({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M328-248h304v-185H328v185Zm0-279h304v-185H328v185ZM212-132v-696h536v696H212Zm22-22h492v-652H234v652Zm492-652H234h492Z" />
    </svg>
  )
}

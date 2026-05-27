import type { SVGProps, JSX } from 'react'

export default function RuleFolder({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h253l74 74h369v462H132Zm22-22h652v-418H451l-74-74H154v492Zm0 0v-492 492Zm159-118 157-157-16-16-141 141-56-56-16 16 72 72Zm263 0 64-64 64 64 15-15-64-64 64-64-15-15-64 64-64-64-15 15 64 64-64 64 15 15Z" />
    </svg>
  )
}

import type { SVGProps, JSX } from 'react'

export default function AzmFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m630-257.56 178.48-178.48v-372.44H436.04L257.56-630H630v372.44ZM391.52-19.09 570-197.56V-570H197.56L19.09-391.52h372.43v372.43Z" />
    </svg>
  )
}

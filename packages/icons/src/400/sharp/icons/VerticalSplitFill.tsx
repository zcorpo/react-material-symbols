import type { SVGProps, JSX } from 'react'

export default function VerticalSplitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M113-367v-60h329v60H113Zm0 167v-60h329v60H113Zm0-333v-60h329v60H113Zm0-167v-60h329v60H113Zm436 500v-560h299v560H549Z" />
    </svg>
  )
}

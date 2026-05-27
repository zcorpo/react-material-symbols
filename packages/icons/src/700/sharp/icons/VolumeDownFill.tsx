import type { SVGProps } from 'react'

export default function VolumeDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M169-335v-291h175l236-235v762L344-335H169Zm471 32v-355q58 19 94.5 68.5T771-480q0 61-36.5 109T640-303Z" />
    </svg>
  )
}

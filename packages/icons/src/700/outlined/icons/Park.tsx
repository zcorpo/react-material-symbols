import type { SVGProps } from 'react'

export default function Park({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M551-55H410v-149H73l189-274h-96l314-446 314 446h-95l188 274H551v149ZM253-298h189-90 256-89 189-455Zm0 0h455L519-572h89L480-753 352-572h90L253-298Z" />
    </svg>
  )
}

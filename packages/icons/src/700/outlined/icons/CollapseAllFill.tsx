import type { SVGProps } from 'react'

export default function CollapseAllFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m290-61-66-66 256-256 256 256-66 66-190-190L290-61Zm190-517L224-834l66-66 190 190 190-190 66 66-256 256Z" />
    </svg>
  )
}

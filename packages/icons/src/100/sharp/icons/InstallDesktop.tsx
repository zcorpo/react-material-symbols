import type { SVGProps, JSX } from 'react'

export default function InstallDesktop({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M375-172v-80H132v-536h350v22H154v492h652v-100h22v122H585v80H375Zm297-271L512-603l15-15 134 134v-304h22v304l134-134 15 15-160 160Z" />
    </svg>
  )
}

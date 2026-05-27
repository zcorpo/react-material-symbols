import type { SVGProps, JSX } from 'react'

export default function TiltArrowUp({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m55-95 169-771h512L906-95H55Zm115-93h619L660-772H299L170-188Zm270-301v196h80v-196l51 52 56-55-147-147-147 147 56 55 51-52Zm349 301H170h619Z" />
    </svg>
  )
}

import type { SVGProps, JSX } from 'react'

export default function Eject({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M166-166v-94h629v94H166Zm-4-186 318-479 318 479H162Zm319-95Zm-145 0h288L480-659 336-447Z" />
    </svg>
  )
}

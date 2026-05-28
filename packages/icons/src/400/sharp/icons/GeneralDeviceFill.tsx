import type { SVGProps, JSX } from 'react'

export default function GeneralDeviceFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-210v-630h320v630H320Zm0 90v-60h320v60H320Z" />
    </svg>
  )
}

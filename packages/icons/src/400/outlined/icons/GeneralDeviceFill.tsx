import type { SVGProps } from 'react'

export default function GeneralDeviceFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-210v-570q0-25 17.5-42.5T380-840h200q25 0 42.5 17.5T640-780v570H320Zm0 90v-60h320v60H320Z" />
    </svg>
  )
}

import type { SVGProps, JSX } from 'react'

export default function WallArtFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-132v-536h234l114-114 114 114h234v536H132Zm190-134h326l-99-132-102 126-65-72-60 78Zm374-188.12q11-11.12 11-26T695.88-506q-11.12-11-26-11T644-505.88q-11 11.12-11 26T644.12-454q11.12 11 26 11T696-454.12ZM401-668h159l-80-79-79 79Z" />
    </svg>
  )
}

import type { SVGProps, JSX } from 'react'

export default function DetectorStatusFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M438-88.35 295.87-230.48 353-286.04l85 85 169-170 57.13 56.56L438-88.35Zm-139.26-564.3 18 60h327.09l17.43-60H298.74Zm-44.65 139.78-38-139.78H88.91v-219h782.74v219H743.91l-41.73 139.78H254.09Z" />
    </svg>
  )
}

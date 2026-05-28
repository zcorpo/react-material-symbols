import type { SVGProps, JSX } from 'react'

export default function Crop916Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M385-172q-23 0-38.5-15.5T331-226v-508q0-23 15.5-38.5T385-788h191q22 0 38 15.5t16 38.5v508q0 23-16 38.5T576-172H385Z" />
    </svg>
  )
}

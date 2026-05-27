import type { SVGProps, JSX } from 'react'

export default function PhotoCameraBackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M186-172q-23 0-38.5-15.5T132-226v-426q0-23 15.5-38.5T186-706h122l74-82h196l74 82h122q23 0 38.5 15.5T828-652v426q0 23-15.5 38.5T774-172H186Zm136-122h326L548-426 447-300l-65-72-60 78Z" />
    </svg>
  )
}

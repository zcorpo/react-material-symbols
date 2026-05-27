import type { SVGProps, JSX } from 'react'

export default function ComputerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M186-268q-23 0-38.5-15.5T132-322v-388q0-23 15.5-38.5T186-764h588q23 0 38.5 15.5T828-710v388q0 23-15.5 38.5T774-268H186ZM80-200v-22h800v22H80Z" />
    </svg>
  )
}

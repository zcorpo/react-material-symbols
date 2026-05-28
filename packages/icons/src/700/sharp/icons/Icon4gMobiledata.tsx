import type { SVGProps, JSX } from 'react'

export default function Icon4gMobiledata({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M273-269v-118H97v-282h83v199h93v-199h82v199h74v83h-74v118h-82Zm217 0v-400h373v83H573v235h208v-79h-92v-72h174v233H490Z" />
    </svg>
  )
}

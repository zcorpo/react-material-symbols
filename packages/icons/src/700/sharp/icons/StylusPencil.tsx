import type { SVGProps } from 'react'

export default function StylusPencil({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m226-321 216-545h76l215 545H226Zm137-94h234L480-704 363-415Zm0 0h234-234ZM135-95l54-126h581l56 126H135Z" />
    </svg>
  )
}

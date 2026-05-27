import type { SVGProps, JSX } from 'react'

export default function ChromeReaderModeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h800v640H80Zm430-60h310v-520H510v520Zm44-356h223v-50H554v50Zm0 109h223v-50H554v50Zm0 109h223v-50H554v50Z" />
    </svg>
  )
}

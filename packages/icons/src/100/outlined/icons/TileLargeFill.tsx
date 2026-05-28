import type { SVGProps, JSX } from 'react'

export default function TileLargeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-171h244v171H172Zm371 0v-171h245v171H543ZM172-469v-319h616v319H172Z" />
    </svg>
  )
}

import type { SVGProps, JSX } from 'react'

export default function PentagonFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M295-103q-31 0-56-17.5T205-167L81-541q-10-29 0-59t36-48l310-216q24-16 53-16t54 16l309 216q26 18 36 48t0 59L755-167q-9 29-34 46.5T665-103H295Z" />
    </svg>
  )
}

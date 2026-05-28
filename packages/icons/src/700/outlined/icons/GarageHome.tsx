import type { SVGProps, JSX } from 'react'

export default function GarageHome({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-95v-518l345-259 346 259v518h-95v-471L480-754 229-566v471h-94Zm237-83h216v-93H372v93Zm0-176h216v-93H372v93ZM289-95v-434h382v434H289Z" />
    </svg>
  )
}

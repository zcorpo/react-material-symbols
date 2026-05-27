import type { SVGProps } from 'react'

export default function GarageHomeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-95v-518l345-259 346 259v518H671v-434H289v434H135Zm237-83h216v-93H372v93Zm0-176h216v-93H372v93Z" />
    </svg>
  )
}

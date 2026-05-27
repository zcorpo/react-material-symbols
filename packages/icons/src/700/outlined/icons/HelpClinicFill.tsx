import type { SVGProps } from 'react'

export default function HelpClinicFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M433-263h94v-204h-94v204Zm80.5-273.68q13.5-13.67 13.5-33.5 0-19.82-13.68-33.32-13.67-13.5-33.5-13.5-19.82 0-33.32 13.68-13.5 13.67-13.5 33.5 0 19.82 13.68 33.32 13.67 13.5 33.5 13.5 19.82 0 33.32-13.68ZM135-95v-518l345-259 346 259v518H135Z" />
    </svg>
  )
}

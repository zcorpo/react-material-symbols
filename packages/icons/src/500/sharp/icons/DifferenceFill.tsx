import type { SVGProps, JSX } from 'react'

export default function DifferenceFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M496.22-523.37h60v-84h84v-60h-84v-84h-60v84h-84v60h84v84Zm-84 147.87h228v-60h-228v60ZM201.43-162.63V-925.5h413.74l235.59 235.59v527.28H201.43ZM73.3-34.5v-684.98h68.13v616.85h499.68v68.13H73.3Z" />
    </svg>
  )
}

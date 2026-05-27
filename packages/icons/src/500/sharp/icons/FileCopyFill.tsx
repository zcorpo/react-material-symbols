import type { SVGProps } from 'react'

export default function FileCopyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M201.43-162.63V-925.5h413.74l235.59 235.59v527.28H201.43ZM587.8-666.54h194.83L587.8-857.37v190.83ZM73.3-34.5v-684.98h68.13v616.85h499.68v68.13H73.3Z" />
    </svg>
  )
}

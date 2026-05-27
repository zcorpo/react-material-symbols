import type { SVGProps } from 'react'

export default function LabelImportantFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m55-135 254.23-345L55-826h548q24.25 0 43.5 10.37Q665.75-805.25 680-787l226 307-226 306q-13.25 19.25-33.5 29.12Q626.25-135 604-135H55Z" />
    </svg>
  )
}

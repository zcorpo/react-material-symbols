import type { SVGProps } from 'react'

export default function Vignette2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-114.02v-732.2h732.2v732.2h-732.2Zm537.3-194.8q70.59-70.49 70.59-171.19 0-100.71-70.54-171.31-70.54-70.59-171.31-70.59-100.78 0-171.26 70.54-70.47 70.54-70.47 171.31 0 100.78 70.49 171.26 70.49 70.47 171.19 70.47 100.71 0 171.31-70.49Z" />
    </svg>
  )
}

import type { SVGProps } from 'react'

export default function GlassCupFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m208-80-88-800h720L752-80H208Zm35-231h474l56-509H187l56 509Z" />
    </svg>
  )
}

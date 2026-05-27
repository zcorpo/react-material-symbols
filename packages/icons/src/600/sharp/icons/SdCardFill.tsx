import type { SVGProps } from 'react'

export default function SdCardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M145.87-65.87v-581.35L393.35-894.7H814.7v828.83H145.87Zm233.74-457.04h60v-157h-60v157Zm118.43 0h60v-157h-60v157Zm118.44 0h60v-157h-60v157Z" />
    </svg>
  )
}

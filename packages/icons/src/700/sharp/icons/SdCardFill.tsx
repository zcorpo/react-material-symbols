import type { SVGProps } from 'react'

export default function SdCardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-55v-597l254-254h437v851H135Zm242-464h60v-157h-60v157Zm118 0h60v-157h-60v157Zm118 0h60v-157h-60v157Z" />
    </svg>
  )
}

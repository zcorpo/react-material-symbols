import type { SVGProps } from 'react'

export default function LaptopChromebookFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M52-248v-22h80v-490h696v490h80v22H52Zm347-22h163v-29H399v29Z" />
    </svg>
  )
}

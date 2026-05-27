import type { SVGProps } from 'react'

export default function SensorWindowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M143-63v-834h674v834H143Zm136-447h125v-40h152v40h126v-252H279v252Zm0 60v257h403v-257H279Zm-42-353v646h486v-646H237Z" />
    </svg>
  )
}

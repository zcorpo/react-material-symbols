import type { SVGProps } from 'react'

export default function TileLarge({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-279h333v279H95Zm438 0v-279h333v279H533Zm-344-94h145v-90H189v90Zm439 0h143v-90H628v90ZM95-479v-387h771v387H95Zm166 244Zm439 0Z" />
    </svg>
  )
}

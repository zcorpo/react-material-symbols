import type { SVGProps } from 'react'

export default function DataThresholding({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm599-94h77v-77l-77 77Zm-470 0h82l120-120h71L377-189h88l120-120h71L536-189h87l120-120h28v-462H189v546l84-84h71L224-189Zm57-197-50-50 191-191 90 90 167-167 50 50-217 218-90-90-141 140Zm-92 197v-582 582Z" />
    </svg>
  )
}

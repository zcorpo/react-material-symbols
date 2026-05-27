import type { SVGProps } from 'react'

export default function AzmFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m632-355 106-106v-287H451L345-642h287v287ZM452-175l106-106v-287H271L165-462h287v287Z" />
    </svg>
  )
}

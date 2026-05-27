import type { SVGProps } from 'react'

export default function FlagFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M252-146v-602h261l17 82h218v287H569l-17-82H274v315h-22Z" />
    </svg>
  )
}

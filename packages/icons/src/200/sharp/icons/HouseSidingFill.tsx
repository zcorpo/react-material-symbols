import type { SVGProps } from 'react'

export default function HouseSidingFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M227.92-160v-414.31L98.31-477.77 80-501.69 480-800l400.77 298.31-19.31 23.92-129.61-96.77V-160h-30.77v-120H258.69v120h-30.77Zm30.77-301.54h442.39v-120H258.69v120Zm0 150.77h442.39v-120H258.69v120Zm20.54-301.54h401.54L480-761.92 279.23-612.31Z" />
    </svg>
  )
}

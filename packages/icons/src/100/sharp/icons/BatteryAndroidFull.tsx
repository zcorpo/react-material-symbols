import type { SVGProps } from 'react'

export default function BatteryAndroidFull({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M92-292v-376h702v376H92Zm739-110v-155h37v155h-37Z" />
    </svg>
  )
}

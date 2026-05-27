import type { SVGProps } from 'react'

export default function HouseSiding({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M236-172v-409l-131 97-13-17 388-287 389 287-14 17-131-97v409h-22v-120H258v120h-22Zm22-290h444v-126H258v126Zm0 148h444v-126H258v126Zm18-296h408L480-761 276-610Z" />
    </svg>
  )
}

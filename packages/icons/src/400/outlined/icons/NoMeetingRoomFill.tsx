import type { SVGProps } from 'react'

export default function NoMeetingRoomFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m749-319-60-60v-356h-87v269L228-840h374v45h147v476Zm81 252L602-295v175H120v-60h92v-506L85-812l43-43 745 745-43 43Z" />
    </svg>
  )
}

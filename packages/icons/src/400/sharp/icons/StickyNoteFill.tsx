import type { SVGProps } from 'react'

export default function StickyNoteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M639-120H120v-720h720v519L639-120Zm-30-60 171-171H609v171ZM450-321h60v-258h129v-60H321v60h129v258Z" />
    </svg>
  )
}

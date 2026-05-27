import type { SVGProps, JSX } from 'react'

export default function NestWakeOnPressFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M778-494v-254h50v254h-50ZM290-172 110-351l30-30 152 29v-388q0-21 13.5-34.5T340-788q21 0 34.5 13.5T388-740v212h47l192 95-45 261H290Z" />
    </svg>
  )
}

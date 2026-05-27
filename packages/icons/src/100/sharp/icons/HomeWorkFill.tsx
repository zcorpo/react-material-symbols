import type { SVGProps, JSX } from 'react'

export default function HomeWorkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M697-619h50v-50h-50v50Zm0 163h50v-50h-50v50Zm0 163h50v-50h-50v50ZM92-172v-319l225-160 225 159.67V-172H389v-186H245v186H92Zm524 0v-358L422-667v-121h446v616H616Z" />
    </svg>
  )
}

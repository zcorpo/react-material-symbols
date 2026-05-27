import type { SVGProps } from 'react'

export default function ThumbnailBarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-154.02v-652.2h267.89v652.2H74.02Zm327.89 0v-652.2h484.31v652.2H401.91Z" />
    </svg>
  )
}

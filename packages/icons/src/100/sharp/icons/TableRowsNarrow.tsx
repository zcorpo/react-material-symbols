import type { SVGProps, JSX } from 'react'

export default function TableRowsNarrow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M194-343h572v-126H194v126Zm0-148h572v-127H194v127Zm0-149h572v-126H194v126Zm-22 468v-616h616v616H172Zm22-22h572v-127H194v127Z" />
    </svg>
  )
}

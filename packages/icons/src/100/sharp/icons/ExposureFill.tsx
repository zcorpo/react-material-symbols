import type { SVGProps } from 'react'

export default function ExposureFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm22-22h572v-572L194-194Zm406-58v-83h-82v-25h82v-82h25v82h83v25h-83v83h-25ZM252-641h169v-25H252v25Z" />
    </svg>
  )
}

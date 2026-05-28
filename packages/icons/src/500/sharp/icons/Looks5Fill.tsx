import type { SVGProps, JSX } from 'react'

export default function Looks5Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M362.37-277h235.26v-236.43H425v-106.94h172.63V-683H362.37v232.43H535v110.94H362.37V-277ZM114.02-114.02v-732.2h732.2v732.2h-732.2Z" />
    </svg>
  )
}

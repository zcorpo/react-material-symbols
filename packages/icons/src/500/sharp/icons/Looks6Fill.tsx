import type { SVGProps } from 'react'

export default function Looks6Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M425-513.43v-106.94h129.63V-683H362.37v406h235.26v-236.43H425Zm0 62.86h110v110.94H425v-110.94ZM114.02-114.02v-732.2h732.2v732.2h-732.2Z" />
    </svg>
  )
}

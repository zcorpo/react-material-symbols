import type { SVGProps } from 'react'

export default function Destruction({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-239h616v239H172Zm22-22h572v-195H194v195Zm71-277-124-73 194-33.29L282-771l162 117 99-174 34 197 192-53-115 163 88 50h-46l-74-44 92-130-154.84 40L532-762l-81 141-132-95 43 157-157 27 103 61h-43Zm215 179Zm-24-179Z" />
    </svg>
  )
}

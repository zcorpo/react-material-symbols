import type { SVGProps } from 'react'

export default function Trip({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-172v-496h240v-108h216v108h240v496H132Zm262-496h172v-86H394v86Zm-100 22H154v452h140v-452Zm350 452v-452H316v452h328Zm22-452v452h140v-452H666ZM480-422Z" />
    </svg>
  )
}

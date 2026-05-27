import type { SVGProps } from 'react'

export default function AddCommentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M450-400h60v-130h130v-60H510v-130h-60v130H320v60h130v130ZM80-80v-800h800v640H240L80-80Z" />
    </svg>
  )
}

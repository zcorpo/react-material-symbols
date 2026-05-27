import type { SVGProps } from 'react'

export default function CommentBankFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m523-547 97-50 96 50v-273H523v273ZM80-80v-800h800v640H240L80-80Z" />
    </svg>
  )
}

import type { SVGProps } from 'react'

export default function SnippetFolderFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h355l71 72h425v619H55Zm516-229v-161h49l56 56v105H571Zm-75 75h255v-211L651-600H496v311Z" />
    </svg>
  )
}

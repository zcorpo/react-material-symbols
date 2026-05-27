import type { SVGProps } from 'react'

export default function LocalCafe({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-95v-94h691v94H135Zm0-159v-612h771v348H730v264H135Zm94-95h407v-422H229v422Zm501-263h81v-160h-81v160ZM229-349h407-407Z" />
    </svg>
  )
}

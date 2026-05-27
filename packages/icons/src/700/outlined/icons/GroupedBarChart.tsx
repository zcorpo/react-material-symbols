import type { SVGProps } from 'react'

export default function GroupedBarChart({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-135v-526h162v526H135Zm232 0v-319h163v319H367Zm296 0v-691h163v691H663Z" />
    </svg>
  )
}

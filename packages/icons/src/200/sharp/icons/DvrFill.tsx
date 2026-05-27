import type { SVGProps } from 'react'

export default function DvrFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M295.04-424.88q6.42-6.33 6.42-15.03 0-8.71-6.34-15.13-6.33-6.42-15.03-6.42-8.71 0-15.13 6.34-6.42 6.33-6.42 15.03 0 8.71 6.34 15.13 6.33 6.42 15.03 6.42 8.71 0 15.13-6.34Zm0-160q6.42-6.33 6.42-15.03 0-8.71-6.34-15.13-6.33-6.42-15.03-6.42-8.71 0-15.13 6.34-6.42 6.33-6.42 15.03 0 8.71 6.34 15.13 6.33 6.42 15.03 6.42 8.71 0 15.13-6.34Zm69.58 160.26H700v-30.76H364.62v30.76Zm0-160H700v-30.76H364.62v30.76Zm0 424.62v-80H120v-560h720v560H595.38v80H364.62Z" />
    </svg>
  )
}

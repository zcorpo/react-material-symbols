import type { SVGProps } from 'react'

export default function BarChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M649.23-200v-192.31H760V-200H649.23Zm-224.61 0v-560h110.76v560H424.62ZM200-200v-367.69h110.77V-200H200Z" />
    </svg>
  )
}

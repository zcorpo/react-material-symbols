import type { SVGProps, JSX } from 'react'

export default function ComputerArrowUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M456.92-377.31h45.39v-221.23L584-516.85l32-31.99-136.38-136L344-549.61l32 32 80.92-80.93v221.23ZM55.39-150.77v-45.39h849.22v45.39H55.39Zm44.61-100v-560h760v560H100Z" />
    </svg>
  )
}

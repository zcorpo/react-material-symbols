import type { SVGProps } from 'react'

export default function NearMe({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M528.54-153.08 423-423.77 152.31-530.08l-.77-31.07 656.92-248.08-248.85 656.15h-31.07Zm13.38-88.61 188.54-489.54-489.69 187.77L457.46-459l84.46 217.31ZM457.46-459Z" />
    </svg>
  )
}

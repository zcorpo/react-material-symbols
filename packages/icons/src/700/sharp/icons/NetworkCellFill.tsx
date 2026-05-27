import type { SVGProps, JSX } from 'react'

export default function NetworkCellFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m55-55 851-851v851H55Zm619-94h137v-530L674-542v393Z" />
    </svg>
  )
}

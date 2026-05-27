import type { SVGProps } from 'react'

export default function DualScreen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m220-242 280 112v-588L220-830v588Zm-60 40v-678h60l340 120v718L160-202Zm340 2v-60h240v-560H220v-60h580v680H500Zm-280-42v-588 588Z" />
    </svg>
  )
}

import type { SVGProps, JSX } from 'react'

export default function Stat3Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m282-81-55.57-55.56L480-390.13l253.57 253.57L678-81 480-279 282-81Zm0-259-55.57-55.57L480-649.13l253.57 253.56L678-340 480-538 282-340Zm0-258.43L226.43-654 480-908.13 733.57-654 678-598.43 480-797 282-598.43Z" />
    </svg>
  )
}

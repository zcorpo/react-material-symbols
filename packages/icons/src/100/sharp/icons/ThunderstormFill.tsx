import type { SVGProps, JSX } from 'react'

export default function ThunderstormFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m347-100 28-82h-60l40-112h60l-34 80h66l-88 114h-12Zm216-32 23-66h-63l34-96h60l-27 64h65l-80 98h-12ZM297-352q-79 0-135-56t-56-135q0-75 51.5-129.5T289-734q29-56 78.5-88T480-854q85 0 144 57t68 142q79 3 120.5 48T854-503q0 63-44 107t-107 44H297Z" />
    </svg>
  )
}

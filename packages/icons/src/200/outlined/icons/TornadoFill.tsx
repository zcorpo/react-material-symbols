import type { SVGProps, JSX } from 'react'

export default function TornadoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M109.23-800h741.54L743.38-615.38H216.62L109.23-800Zm124.46 215.38h492.62l-97.93 169.24h-296l-98.69-169.24Zm116 200h260.39L480-160 349.69-384.62Z" />
    </svg>
  )
}

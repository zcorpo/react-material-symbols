import type { SVGProps, JSX } from 'react'

export default function ResetTvFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M317-95v-80H55v-691h851v307H501l84-84-50-50-170 170 170 169 50-50-84-83h405v312H644v80H317Z" />
    </svg>
  )
}

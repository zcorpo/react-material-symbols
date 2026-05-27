import type { SVGProps } from 'react'

export default function PenSize4({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M228-300.4q0-30.04 21-50.6l360-360q20.79-21 50.89-21Q690-732 711-710.82q21 21.19 21 51.22 0 30.04-21 50.6L351-249q-20.79 21-50.89 21Q270-228 249-249.18q-21-21.19-21-51.22Z" />
    </svg>
  )
}

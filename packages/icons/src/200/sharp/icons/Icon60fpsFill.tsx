import type { SVGProps } from 'react'

export default function Icon60fpsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M115.38-235.38v-489.24H352v30.77H146.15v177.23h247.31v281.24H115.38Zm30.77-30.77h216.54v-219.7H146.15v219.7Zm410.47 0h257.23v-427.7H556.62v427.7Zm-30.77 30.77v-489.24h318.77v489.24H525.85Z" />
    </svg>
  )
}

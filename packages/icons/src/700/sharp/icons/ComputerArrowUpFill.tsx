import type { SVGProps, JSX } from 'react'

export default function ComputerArrowUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440-375h80v-181l51 52 56-55-147-147-147 147 56 55 51-52v181ZM17-83v-72h926v72H17Zm38-132v-651h851v651H55Z" />
    </svg>
  )
}

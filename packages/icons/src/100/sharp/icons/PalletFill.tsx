import type { SVGProps, JSX } from 'react'

export default function PalletFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M178-206v-32h604v32h-44v-16H502v16h-44v-16H222v16h-44Zm75-136v-456h454v456H253Zm107-296h240v-16H360v16Z" />
    </svg>
  )
}

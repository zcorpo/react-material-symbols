import type { SVGProps } from 'react'

export default function TurnSlightLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M549.23-169.23v-289.54L299.23-708v136.23h-30.77V-760h188.23v30.77H320.46L580-470.46v301.23h-30.77Z" />
    </svg>
  )
}

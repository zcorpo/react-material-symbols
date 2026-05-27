import type { SVGProps, JSX } from 'react'

export default function LaptopChromebookFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M0-154.5v-62.87h77.37v-628.85h805.26v628.85H960v62.87H0Zm396-62.87h170v-42H396v42Z" />
    </svg>
  )
}

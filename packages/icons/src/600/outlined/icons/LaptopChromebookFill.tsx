import type { SVGProps, JSX } from 'react'

export default function LaptopChromebookFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M0-147v-66.78h73.78V-854.7h812.44v640.92H960V-147H0Zm396-66.78h170v-42H396v42Z" />
    </svg>
  )
}

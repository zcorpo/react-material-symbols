import type { SVGProps } from 'react'

export default function ViewColumn({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M111.87-194.02v-572.2h736.5v572.2h-736.5ZM180-262.15h154.5v-435.7H180v435.7Zm222.63 0h154.74v-435.7H402.63v435.7Zm222.87 0H780v-435.7H625.5v435.7Z" />
    </svg>
  )
}

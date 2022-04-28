import { FC } from "react";

export const App: FC = () => {
  return (
    <div>
      <a href="/">
        1
        <div>
          2
          <a href="/idk">3</a>
        </div>
      </a>

      <hr />

      <a href="/">
        1
        <span>
          2
          <a href="/idk">3</a>
        </span>
      </a>
    </div>
  )
}
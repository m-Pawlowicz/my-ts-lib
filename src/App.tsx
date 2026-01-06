import { useState } from "react";
import { css } from "@emotion/react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import { Header, Card, Button, Footer } from "./components";

const rootStyles = css({
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center",
});

const logoStyles = css({
  height: "6em",
  padding: "1.5em",
  willChange: "filter",
  transition: "filter 300ms",
  "&:hover": {
    filter: "drop-shadow(0 0 2em #646cffaa)",
  },
  "&.react:hover": {
    filter: "drop-shadow(0 0 2em #61dafbaa)",
  },
});

const logoSpinAnimation = css`
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media (prefers-reduced-motion: no-preference) {
    animation: logo-spin infinite 20s linear;
  }
`;

const cardStyles = css({
  padding: "2em",
});

const readTheDocsStyles = css({
  color: "#888",
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div css={rootStyles}>
      <Header title="Vite + React" />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} css={logoStyles} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            css={[logoStyles, logoSpinAnimation]}
            className="react"
            alt="React logo"
          />
        </a>
      </div>
      <div css={cardStyles}>
        <Card>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </Card>
      </div>
      <p css={readTheDocsStyles}>
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </div>
  );
}

export default App;

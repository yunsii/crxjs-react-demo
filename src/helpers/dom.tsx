import React from "react";
import ReactDOM from "react-dom/client";

export function createContainer(id: string) {
  const targetDom = document.querySelector(id);
  if (targetDom) {
    return targetDom;
  }
  const container = document.createElement(id);
  container.id = id;
  return document.documentElement.appendChild(container);
}

export interface RenderDOMOptions {
  id: string;
  dom: JSX.Element;
}

export function renderDOM(options: RenderDOMOptions) {
  const { id, dom } = options;

  const container = createContainer(id);
  const shadowRoot = container.attachShadow({ mode: "open" });

  ReactDOM.createRoot(shadowRoot).render(<React.StrictMode>{dom}</React.StrictMode>);
}

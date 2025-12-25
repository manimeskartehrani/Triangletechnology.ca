// mdx-components.tsx
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    // Example: style links globally in MDX
    a: (props) => (
      <a {...props} className="text-purple-300 underline underline-offset-4" />
    ),
  };
}

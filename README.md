# `next-scroll-to-id`

A simple React hook for smoothly scrolling to specific elements by their `ID` in a Next.js application. It also supports scrolling to the top of the page and provides customizable behavior, such as scroll offsets, delays, and completion callbacks.

## Features

- **Smooth scrolling** to any element by its ID.
- Configurable scroll behavior: offsets, delays, and behavior options.
- Optional scroll-to-top functionality.
- Easy integration in any Next.js project.
- Customizable scrolling with callbacks to trigger actions once scrolling is complete.

## Installation

Install the package via npm or yarn:

```bash
npm install next-scroll-to-id
```

Or with yarn:

```bash
yarn add next-scroll-to-id
```

## Demo

Check out a live demo of the package in action:

[Live Demo](https://next-scroll-to-id-demo.vercel.app/)

## Usage

Below is a complete example of how to use the `useSmoothScroll` hook to scroll to specific sections of a page or scroll back to the top.

### Example Usage

```tsx
// Import required dependencies
import React, { useState } from "react";
import useSmoothScroll from "next-scroll-to-id";
import { GoMoveToTop } from "react-icons/go";

const LandingPage = () => {
  // Manage the scrollToId state, which determines which section to scroll to
  const [scrollToId, setScrollToId] = useState(null);

  // Get the scroll-to-top method from the hook
  const { triggerScrollToTop } = useSmoothScroll({
    scrollToId, // The target element to scroll to (specified by its ID)
    offset: -50, // Optional: Adjust the final scroll position by -50px
  });

  return (
    <div className="relative w-[100%]">
      {/* Navigation bar to trigger scrolling */}
      <nav className="flex sticky top-0 z-[10] gap-[1rem] justify-center items-center w-full h-[4rem] bg-black text-white">
        <li
          onClick={() => setScrollToId("div-1")}
          className="capitalize list-none cursor-pointer"
        >
          div-1
        </li>
        <li
          onClick={() => setScrollToId("div-2")}
          className="capitalize list-none cursor-pointer"
        >
          div-2
        </li>
        <li
          onClick={() => setScrollToId("div-3")}
          className="capitalize list-none cursor-pointer"
        >
          div-3
        </li>
        <li
          onClick={() => setScrollToId("div-4")}
          className="capitalize list-none cursor-pointer"
        >
          div-4
        </li>
        <li
          onClick={() => setScrollToId("div-5")}
          className="capitalize list-none cursor-pointer"
        >
          div-5
        </li>
      </nav>

      {/* Content sections to scroll to */}
      <div
        id="div-1"
        className="flex justify-center items-center text-white text-[3rem] bg-gray-500 w-full h-[50vh]"
      >
        <h2>Div -1</h2>
      </div>
      <div
        id="div-2"
        className="flex justify-center items-center text-white text-[3rem] bg-green-500 w-full h-[50vh]"
      >
        <h2>Div -2</h2>
      </div>
      <div
        id="div-3"
        className="flex justify-center items-center text-white text-[3rem] bg-pink-500 w-full h-[50vh]"
      >
        <h2>Div -3</h2>
      </div>
      <div
        id="div-4"
        className="flex justify-center items-center text-white text-[3rem] bg-yellow-500 w-full h-[50vh]"
      >
        <h2>Div -4</h2>
      </div>
      <div
        id="div-5"
        className="flex justify-center items-center text-white text-[3rem] bg-orange-500 w-full h-[50vh]"
      >
        <h2>Div -5</h2>
      </div>

      {/* Scroll to top button */}
      <div
        onClick={triggerScrollToTop}
        title="Go to top"
        className="cursor-pointer fixed flex justify-center items-center text-[1.5rem] bottom-[2rem] right-[2rem] text-black bg-white size-[3rem] rounded-full"
      >
        <GoMoveToTop />
      </div>
    </div>
  );
};

export default LandingPage;
```

### Hook Options

The `useSmoothScroll` hook accepts the following options:

| Option             | Type             | Default     | Description                                         |
| ------------------ | ---------------- | ----------- | --------------------------------------------------- |
| `scrollToId`       | `string`         | `''`        | The ID of the element to scroll to.                 |
| `offset`           | `number`         | `-100`      | Additional offset for the scroll position.          |
| `behavior`         | `ScrollBehavior` | `'smooth'`  | Scroll behavior: 'smooth' or 'auto'.                |
| `enabled`          | `boolean`        | `true`      | Enables or disables the scroll action.              |
| `delay`            | `number`         | `0`         | Delay before starting the scroll (in milliseconds). |
| `onScrollComplete` | `() => void`     | `undefined` | Callback invoked once the scroll action completes.  |

### Methods

The hook provides a method that can be triggered directly:

- `triggerScrollToTop`: Scrolls to the top of the page with smooth behavior by default.

### Customization

You can adjust the scrolling behavior by modifying options like `offset`, `behavior`, or `delay` to suit your needs. The `onScrollComplete` callback allows you to trigger additional logic (e.g., analytics tracking or UI updates) after the scroll completes.

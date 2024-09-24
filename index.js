"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useSmoothScroll = ({ scrollToId = '', // Default to empty string, meaning no specific target
offset = -100, // Default offset value
behavior = 'smooth', // Default scroll behavior is smooth
enabled = true, // Enabled by default
delay = 0, // No delay by default
onScrollComplete, // Optional callback for when scroll is complete
 }) => {
    // useEffect runs when scrollToId or other dependencies change
    (0, react_1.useEffect)(() => {
        // If scrolling is not enabled, exit early
        if (!enabled)
            return;
        // Handle the scroll action to a specific target element
        const handleScroll = () => {
            if (scrollToId) {
                // Try to get the target element by its ID
                const targetElement = document.getElementById(scrollToId);
                // If the element exists, calculate the scroll position and scroll to it
                if (targetElement) {
                    const y = targetElement.getBoundingClientRect().top + window.scrollY + offset;
                    // Scroll to the calculated Y position with the specified behavior (smooth or auto)
                    window.scrollTo({ top: y, behavior });
                    // If an onScrollComplete callback was provided, call it after the scroll
                    if (onScrollComplete) {
                        // Delay the callback by the delay duration plus an extra 500ms to account for scrolling time
                        setTimeout(onScrollComplete, delay + 500);
                    }
                }
            }
        };
        // If a delay is set, wait for it before triggering the scroll
        if (delay > 0) {
            setTimeout(handleScroll, delay);
        }
        else {
            // Otherwise, scroll immediately
            handleScroll();
        }
    }, [scrollToId, offset, behavior, enabled, delay, onScrollComplete]);
    // Provide a method to manually trigger a scroll to the top of the page
    const triggerScrollToTop = () => {
        window.scrollTo({ top: 0, behavior });
    };
    // Return an object exposing the scroll-to-top function to the user
    return {
        triggerScrollToTop,
    };
};
exports.default = useSmoothScroll;

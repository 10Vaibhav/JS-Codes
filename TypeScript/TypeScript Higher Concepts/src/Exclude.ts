// In function that can accept several types of inputs but you want to exclude specific types from being passed to it.

type EventType = "Click" | "Scroll" | "MouseMove";
type ExcludeEvent = Exclude<EventType, "Scroll">;
// "Click" | "MouseMove"

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
}

handleEvent("Click");
// handleEvent("Scroll"); // it gives you error, because we already excluded it.

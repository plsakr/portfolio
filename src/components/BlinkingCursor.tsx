import {cn} from "@/lib/utils.ts";

function BlinkingCursor(props: {blinking: boolean}) {
  return (
    <div className={cn('text-6xl font-mono text-white inline-block', props.blinking ? 'animate-blink' : '')}>{'|'}</div>
  );
}

export {BlinkingCursor}
import { Form } from "@remix-run/react";
import { useRef } from "react";

export default function MysteryNewPage() {
  const titleRef = useRef<HTMLInputElement>(null);
  const conceptRef = useRef<HTMLTextAreaElement>(null);
  const hookRef = useRef<HTMLTextAreaElement>(null);
  const dayRef = useRef<HTMLInputElement>(null);
  const shadowsRef = useRef<HTMLInputElement>(null);
  const duskRef = useRef<HTMLInputElement>(null);
  const nightfallRef = useRef<HTMLInputElement>(null);
  const midnightRef = useRef<HTMLInputElement>(null);

  return (
    <Form method="post">
      <div className="mb-6">
        <label className="flex flex-col gap-1">
          <span>Title: </span>
          <input
            ref={titleRef}
            name="title"
            className="flex-1 rounded-md border-2 px-3 text-lg leading-loose"
          />
        </label>
      </div>

      <div className="mb-6">
        <label className="flex flex-col gap-1">
          <span>Concept: </span>
          <textarea
            ref={conceptRef}
            name="concept"
            className="flex-1 rounded-md border-2 px-3 text-lg leading-loose"
          />
        </label>
      </div>

      <div className="mb-6">
        <label className="flex flex-col gap-1">
          <span>Hook: </span>
          <textarea
            ref={hookRef}
            name="hook"
            className="flex-1 rounded-md border-2 px-3 text-lg leading-loose"
          />
        </label>
      </div>

      <div className="mb-6">
        <label className="flex flex-col gap-1">
          <span>Day: </span>
          <input
            ref={dayRef}
            name="day"
            className="flex-1 rounded-md border-2 px-3 text-lg leading-loose"
          />
        </label>
      </div>

      <div className="mb-6">
        <label className="flex flex-col gap-1">
          <span>Shadows: </span>
          <input
            ref={shadowsRef}
            name="shadows"
            className="flex-1 rounded-md border-2 px-3 text-lg leading-loose"
          />
        </label>
      </div>

      <div className="mb-6">
        <label className="flex flex-col gap-1">
          <span>Dusk: </span>
          <input
            ref={duskRef}
            name="dusk"
            className="flex-1 rounded-md border-2 px-3 text-lg leading-loose"
          />
        </label>
      </div>

      <div className="mb-6">
        <label className="flex flex-col gap-1">
          <span>Nightfall: </span>
          <input
            ref={nightfallRef}
            name="nightfall"
            className="flex-1 rounded-md border-2 px-3 text-lg leading-loose"
          />
        </label>
      </div>

      <div className="mb-6">
        <label className="flex flex-col gap-1">
          <span>Midnight: </span>
          <input
            ref={midnightRef}
            name="midnight"
            className="flex-1 rounded-md border-2 px-3 text-lg leading-loose"
          />
        </label>
      </div>
    </Form>
  );
}

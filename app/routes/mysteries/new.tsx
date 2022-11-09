import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { ZodError } from "zod";

import { createMystery } from "~/models/mystery.server";
import { mysteryParams } from "~/forms/mystery";
import { requireUserId } from "~/session.server";

export async function action({ request }: ActionArgs) {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const title = formData.get("title");
  const concept = formData.get("concept");
  const hook = formData.get("hook");
  const day = formData.get("day");
  const shadows = formData.get("shadows");
  const dusk = formData.get("dusk");
  const nightfall = formData.get("nightfall");
  const midnight = formData.get("title");

  const parsedParams = mysteryParams.safeParse({
    title,
    concept,
    hook,
    day,
    shadows,
    dusk,
    nightfall,
    midnight,
    userId,
  });

  if (parsedParams.success) {
    const mystery = await createMystery(parsedParams.data);

    return redirect(`/mystery/${mystery.id}`);
  } else if (parsedParams.error instanceof ZodError) {
    const formattedErrors = parsedParams.error.format();

    return json(formattedErrors, { status: 400 });
  } else {
    return json(
      { title: { _errors: "Something went wrong, please try again later!" } },
      { status: 400 }
    );
  }
}

export default function MysteryNewPage() {
  const actionData = useActionData<typeof action>();
  const titleRef = useRef<HTMLInputElement>(null);
  const conceptRef = useRef<HTMLTextAreaElement>(null);
  const hookRef = useRef<HTMLTextAreaElement>(null);
  const dayRef = useRef<HTMLInputElement>(null);
  const shadowsRef = useRef<HTMLInputElement>(null);
  const duskRef = useRef<HTMLInputElement>(null);
  const nightfallRef = useRef<HTMLInputElement>(null);
  const midnightRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(actionData);

    if (actionData?.title?._errors) {
      titleRef.current?.focus();
    }
  }, [actionData]);

  return (
    <Form method="post">
      <div className="mb-6">
        <label className="flex flex-col gap-1">
          <span>Title: </span>
          <input
            ref={titleRef}
            name="title"
            className="flex-1 rounded-md border-2 px-3 text-lg leading-loose"
            aria-invalid={actionData?.title?._errors ? true : undefined}
            aria-errormessage={
              actionData?.title?._errors ? "title-error" : undefined
            }
          />
        </label>
        {actionData?.title?._errors && (
          <div className="pt-1 text-red-700" id="title-error">
            {actionData.title._errors}
          </div>
        )}
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

      <div className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Save
        </button>
      </div>
    </Form>
  );
}

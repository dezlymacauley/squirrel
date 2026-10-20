/*
  ABOUT: The `.remote` suffix

  This tells SvelteKit that the logic of this module
  should always run on the server.
*/

import { form } from "$app/server";
import * as v from "valibot";

// Now you can use this `login` variable on the form element.
export const login = form(
  v.object({
    handle: v.pipe(v.string(), v.nonEmpty("Handle cannot be empty")),
  }),

  async (data) => {
    console.log("Todo: Implement login", data);
  },
);

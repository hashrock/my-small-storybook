import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import {Button} from "./Button.tsx";

export default function Stories(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <Button>
      MyButton
    </Button>
  );
}

import { revalidatePath } from "next/cache";

export function GET() {
  revalidatePath("/", "layout");
  return new Response(null, { status: 200 });
}

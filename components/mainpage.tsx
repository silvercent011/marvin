/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jjzbKrKnQK2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function mainpage() {
  return (
    <>
      <div class="flex-1 overflow-auto p-6">
        <div class="flex flex-col gap-4">
          <div class="flex items-start gap-4">
            <img
              alt="User avatar"
              class="h-10 w-10 rounded-full"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width={40}
            />
            <div class="flex-1 rounded-lg bg-gray-100 p-4 text-sm dark:bg-gray-800">
              <p>Hello! I'm an AI assistant. How can I help you today?</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="flex-1 rounded-lg bg-gray-900 p-4 text-sm text-gray-50 dark:bg-gray-950">
              <p>
                Hi there! I'm wondering if you can help me with a task I'm
                working on.
              </p>
            </div>
            <img
              alt="User avatar"
              class="h-10 w-10 rounded-full"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width={40}
            />
          </div>
          <div class="flex items-start gap-4">
            <img
              alt="User avatar"
              class="h-10 w-10 rounded-full"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width={40}
            />
            <div class="flex-1 rounded-lg bg-gray-100 p-4 text-sm dark:bg-gray-800">
              <p>
                Sure, I'd be happy to help! What kind of task are you working
                on?
              </p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="flex-1 rounded-lg bg-gray-900 p-4 text-sm text-gray-50 dark:bg-gray-950">
              <p>
                I'm working on a project that requires some data analysis. Can
                you help me with that?
              </p>
            </div>
            <img
              alt="User avatar"
              class="h-10 w-10 rounded-full"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width={40}
            />
          </div>
          <div class="flex items-start gap-4">
            <img
              alt="User avatar"
              class="h-10 w-10 rounded-full"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width={40}
            />
            <div class="flex-1 rounded-lg bg-gray-100 p-4 text-sm dark:bg-gray-800">
              <p>
                Absolutely, I'd be happy to assist with your data analysis
                project. What kind of data are you working with and what
                insights are you looking to uncover?
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="border-t bg-gray-100 p-4 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center gap-2">
          <Textarea
            class="flex-1 resize-none"
            placeholder="Type your message..."
          />
          <Button>Send</Button>
        </div>
      </div> */}
    </>
  );
}

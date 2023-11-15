import NavBar from "@/components/ui/navbar";
import Code from "@/components/ui/code";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ExamplesPage() {
  return (
    <main className="h-full flex-col items-center justify-center bg-ldblack">
      <div className="w-full text-white flex h-20 shadow-2xl">
        <NavBar />
      </div>
      <div className="text-white w-1/2 mx-auto space-y-2 pb-5">
        <h1 className="text-3xl font-bold my-3.5">Code Samples</h1>
        <Accordion type="single" collapsible className="w-full text-white">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h2 className="text-2xl">LaunchDarkly Basics</h2>
            </AccordionTrigger>
            <AccordionContent>
              <h3 className="text-2xl font-bold my-3.5">
                Import the appropriate SDK
              </h3>
              <Code
                language={"js"}
                code={`import * as ld from 'launchdarkly-node-server-sdk'`}
              />
              <h3 className="text-2xl font-bold my-3.5">
                Initialize the SDK client
              </h3>
              <p>
                This pulls all the flag data from LaunchDarkly's edge-based{" "}
                <a href="https://launchdarkly.com/blog/flag-delivery-at-edge/">
                  Flag Delivery Network
                </a>
                . Intialization takes less than 200ms to complete.
              </p>
              <Code
                language={"js"}
                code={`const client = ld.init('sdk-key-123abc');
await client.waitForInitialization()`}
              />
              <h3 className="text-2xl font-bold my-3.5">Create the context</h3>
              <p>
                Contexts contain any data that you intend to use for targeting.
              </p>
              <Code
                language={"js"}
                code={`const context = {
  "kind": 'user',
  "key": 'user-key-123abc',
  "name": 'Sandy'
};`}
              />
              <h3 className="text-2xl font-bold my-3.5">
                Get the flag variation for this context
              </h3>
              <Code
                language={"js"}
                code={`const value = await client.variation('flag-key-123abc', context, false);

// let's use the flag - in this case it's a boolean
if (value) {
  // run our new code
}`}
              />
              <p>That's the basics!</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h2 className="text-2xl">Another Example</h2>
            </AccordionTrigger>
            <AccordionContent>
              <h2 className="text-2xl font-bold my-3.5">
                Import the appropriate SDK
              </h2>
              <Code
                language={"js"}
                code={`import * as ld from 'launchdarkly-node-server-sdk'`}
              />
              <h2 className="text-2xl font-bold my-3.5">
                Initialize the SDK client
              </h2>
              <p>
                This pulls all the flag data from LaunchDarkly's edge-based{" "}
                <a href="https://launchdarkly.com/blog/flag-delivery-at-edge/">
                  Flag Delivery Network
                </a>
                . Intialization takes less than 200ms to complete.
              </p>
              <Code
                language={"js"}
                code={`const client = ld.init('sdk-key-123abc');
await client.waitForInitialization()`}
              />
              <h2 className="text-2xl font-bold my-3.5">Create the context</h2>
              <p>
                Contexts contain any data that you intend to use for targeting.
              </p>
              <Code
                language={"js"}
                code={`const context = {
  "kind": 'user',
  "key": 'user-key-123abc',
  "name": 'Sandy'
};`}
              />
              <h2 className="text-2xl font-bold my-3.5">
                Get the flag variation for this context
              </h2>
              <Code
                language={"js"}
                code={`const value = await client.variation('flag-key-123abc', context, false);

// let's use the flag - in this case it's a boolean
if (value) {
  // run our new code
}`}
              />
              <p>That's the basics!</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}

import React from "react";

export default function Algorithm() {
  return (
    <div>
      <pre className="text-2xl font-normal font-sans -mt-[420px]">
        Algorithm for enqueue
        <br />
        &emsp;&emsp;Step 1: Start
        <br />
        &emsp;&emsp;Step 2: If queue is full, elements cannot be added into
        queue print(“queue overflow”) and exit.
        <br />
        &emsp;&emsp;Step 3: If queue is not full, increment rear pointer to
        point to next location in queue .<br />
        &emsp;&emsp;Step 4: Add element to the queue location where rear is
        pointing and increment rear pointer.
        <br />
        &emsp;&emsp;Step 5: return success.
        <br />
        &emsp;&emsp;Step 6: Stop
        <br />
        <br />
        Algorithm for dequeue
        <br />
        &emsp;&emsp;Step 1: Start
        <br />
        &emsp;&emsp;Step 2: If queue is empty,elements cannot be deleted from
        queue print(“queue Underflow”) and exit.
        <br />
        &emsp;&emsp;Step 3: If queue is not empty, access the data where front
        pointer is pointing.
        <br />
        &emsp;&emsp;Step 4: Increment front pointer to the next element and
        delete previous item in queue i.e., queue[front-1].
        <br />
        &emsp;&emsp;Step 5: return success.
        <br />
        &emsp;&emsp;Step 6: Stop
        <br />
      </pre>
    </div>
  );
}

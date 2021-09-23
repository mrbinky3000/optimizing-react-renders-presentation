# Demo 3
## Passing a prop to a Sub-Component Using Multiple Contexts

In this demo, we've broken the context object into smaller individual contexts.  But even that
didn't prevent re-renders in the A3 block when updating the username.  We had to use the useCallback
hook so that we didn't store a new anonymous function in context.  Instead we store a reference to
the function used to update the username.

Demo what happens when an object is supplied for the username
# optimizing-react-renders-presentation
Presentation material for a lunch-and-learn on reducing react renders

View the demo here:
https://mrbinky3000.github.io/optimizing-react-renders-presentation/

## Demo 1
### Passing a Prop Down To a Sub-Component
We are passing the username from the page level down through all the A blocks and all the B blocks.

The difference between the A and B blocks is that the A blocks are optimized using React.memo() and the B blocks have no optimizations

Clicking on Username updates the username to new name.

Clicking on Timestamp updates that block's timestamp.

## Demo 2
### Passing a prop to a Sub-Component Using Context

This demo does not pass the username down through each component.  It uses the React context.api instead.  

The context is defined at the "Page" block level.  

The last block in the A blocks subscribes to the context.  

The B blocks still pass the username down through all the blocks.

## Demo 3
### Passing a prop to a Sub-Component Using Multiple Contexts

In this demo, we've broken the context object into smaller individual contexts.  But even that
didn't prevent re-renders in the A3 block when updating the username.  We had to use the useCallback
hook so that we didn't store a new anonymous function in context.  Instead we store a reference to
the function used to update the username.

Demo what happens when an object is supplied for the username

## Demo 4
### Passing a prop to a Sub-Component Using Redux

This demo used React Redux.  It does require React.memo() like the others, but it doesn't require 
us to wrap the context "action" in useCallback. By default, the actions created by redux are 
references to function and not new functions.  

Redux Tool Kit has rejuvenated the redux community. It is actively maintained.

Pro: less prone to user error. All it takes is one person to poison a context.
Con: Boilerplate code has been reduced due to RTK, but still, there is boilerplate. learning curve

# Demo 5
## Passing a prop to a Sub-Component Using Recoil

This demo uses Recoil. Recoil was created by Facebook. It feels like Redux, but with less boilerplate and is designed to be compatible with new React features like Concurrent Mode.

Honestly, we should prob move from redux to this, although recent updates to redux tool kit still make redux a viable choice.

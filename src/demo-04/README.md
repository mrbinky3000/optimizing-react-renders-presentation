# Demo 4
## Passing a prop to a Sub-Component Using Context

This demo used React Redux.  It does require React.memo() like the others, but it doesn't require 
us to wrap the context "action" in useCallback. By default, the actions created by redux are 
references to function and not new functions.  

Redux Tool Kit has rejuvenated the redux community. It is actively maintained.

Pro: less prone to user error. All it takes is one person to poison a context.
Con: Boilerplate code has been reduced due to RTK, but still, there is boilerplate. learning curve

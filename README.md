# basic-recursion-visual
As part of an intermediate programming class at The University Of Pittsburgh I was tasked to use recursion to find all correct paths through a preformulated maze. This was to be done using the Java Language.

After completing that I decided to complete the same task using HTML/CSS/JS so that I could also provide a visual of how the recursive trace works as an aide to future students struggling to understand the execution and how it should work.

The Green parts are the valid edges that serve as the endpoints. The orange blocks are the path the recursive trace took and the red blocks are the dead ends where the trace was forced to retreat atleast once and find a new path to an edge. The trace looks for valid paths in a clockwise motion which should not affect the overall speed of the trace but can affect the path visual as some paths that originally were part of the correct path trace could become a dead end if a different path is taken. Of course this is all dependent on the set up of the maze.

View the trace for yourself on codepen here https://codepen.io/DebugAyem/pen/rrxeOZ. In future implementations I (or you) will install a timer that shows the trace in real time as well as making the map more complicated.

/*
! Props as an API
* Remember that any given component is always created by someone and consumed by someone.
? The creator is the builder and the person who defines what props it accepts.
? The consumer uses the component somewhere in the application by choosing values for those props.
! We can therefore think of props as a sort of public API; it is the public interface of our component.

Providing too little props makes our application not flexible enough and potentially not even useful.
Too many props could make the component too hard to use, exposing too much complexity, and having hard-to-write/understand code.
* If you do have lots and lots of props, prodivde good default values.
*/
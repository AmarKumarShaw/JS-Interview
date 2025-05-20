var name = "Shaw"
const obj = {
    name: "Amar",
    normal() {
      console.log(this.name);
    },
    arrow: () => {
      console.log(this.name);
    }
  };
  
  obj.normal(); // "Amar"
  obj.arrow();  // undefined (or window.name)

//   Normal function: Has its own this context, which is dynamically determined based on how the function is called.

// Arrow function: Inherits this from the enclosing lexical scope; it does not have its own this.
  
const PI = 3.14;
PI = 42; // stop me from doing this!


/* Write an ES2015 Version */
Object.defineProperty(typeof global === "object" ? global : window, "PI",{
    value : 3.14159265,
    enumerable : true,
    writable : false,
    configurable: false
});
PI > 3.0;

// What is the difference between var and let?
//var has a higher scope and can be redeclared. let's scope pertains to the block that it is declared in while var's scope can be hoisted
// What is the difference between var and const?
//const is block scope as with let. var's scope can be hoisted. const cannot be reassigned or redeclared
// What is the difference between let and const?
//const and let have the same scope but let can be reassigned
// What is hoisting?
//highest scope in the block it is declared in almost as if it is being run first in the code.
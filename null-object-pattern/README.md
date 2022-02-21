# Null Object Pattern
The Null Object Pattern is going to be used anytime a null object is returned.

Instead of implementing if checks to see if the object is null or not before proceeding witht the rest of the code to avoid accessing properties on undefined, a default Null Object can be returned.

This Null Object can have the exact same signature of the regular object, with the same properties and methods, with the default values.
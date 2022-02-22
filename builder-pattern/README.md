# Builder Pattern
Useful when we have objects with many required and optional fields.


## before.js
Without the pattern, we need to specify all optional fields as 'undefined' while creating the object.


## after_traditional.js
To overcome this issue, we use an object builder.

Only this builder calls the constructor of the class.
Whenever an object needs to be created, only the builder is called which in turn calls the constructor.

Only the required properties are specified in the class constructor.

The optional properties go as setters in the builder

Each setter must return 'this', i.e the  builder itself, so that multiple setters can be chained together.

Finally, a build() method can be called which returns the object built by the constructor in the builder.


## after_modern.js
Instead of using the builder,  the constructor can accept all required properties as arguments and all the optional properties in an object. This object can have default values specified.

While creating the object, pass only the required parameters, and one/more of the optional parameters as k-v pairs in the object.

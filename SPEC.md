# Latest Specification (v0.1)

# Representation

Standard Resource is a system for representing data on clients.

# Document Structure

A Standard Resource document has two top-level members:

* `resources`: the document's "resource data"
* `requests`: information pertaining to requests

Both `resources` and `requests` are objects. The members of `resources`
must be valid resource types. The members of `requests` must be valid request
keys.

### Resources Slices

Within `resources`, each member must specify a Resource Slice. A Resource Slice
is an object with the following members:

* `resourceType`: The type of the resource
* `resources`: An object containing individual resource data
* `meta`: An object containing resource metadta
* `lists`: An object containing ordered lists of resources

```json
{
  "resourceType": "books",
  "resources": {
    // ...resources here
  },
  "lists": {
    // ...lists here
  },
  "meta": {
    // ...meta here
  }
}
```

### Resource

A Resource is an object with one required member: `id`.

* `id`. A unique identifier for this resource. It must be a string or a number.

A Resource may contain other members as well.

```json
// A simple resource
{
  "id": "1";
}
```

```json
// A resource with additional attributes
{
  "id": "1",
  "title": "Standard Resource",
  "publishYear": 2018,
  "version": "0.1"
}
```

### Resource Metadata

Resource metadata is an object with any number of keys.

### Resource Slice

A resource slice is an object that contains information about one type of Resource.

### Resource Structure

A resource is a

# Equivalency

It is not expected that every client-side store implement a structure that serializes
directly to a Standard Resource document. A requirement, however, is "equivalency."

A document is "equivalent" to a Standard Resource document if two pure functions can be
written: one that transforms any document into a Standard Resource document, and
another that can transform any Standard Resource document into the other format.

```js
transform( equivalentDocument ) => standardResourceDocument
inverseTransform( standardResourceDocument ) => equivalentDocument
```

### Examples

A common pattern when using Redux is to use the `combineReducers` method. An
equivalent document would be flattening the `resources` top-level member into
the store structure.

For instance:

```js
{
  "books": {},
  "authors": {},
  "requests": {}
}
```

> Note: the name of the `requests` Redux store slice could be anything in this example.

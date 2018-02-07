# Latest Specification (v0.1)

# Representation

Standard Resource is agnostic to format. You may use JSON, YAML, XML, or any other
system. This specification uses JSON.

# Objects

### Resource Slice

An object containing the following keys:

- `resources`: A key-value store of Resources
- `lists`: A key-value store that maps list names to Arrays of Resource IDs
- `meta`: A key-value store of Resource metadata

### Resource

A Resource is an object with one required key: `id`.

- `id`. A unique identifier for this resource. It must be a string or a number.

A Resource may contain other keys as well.

```js
// A simple resource
{
  id: '1'
}
```

```js
// A resource with additional attributes
{
  id: '1',
  title: 'Standard Resource',
  publishYear: '2018',
  version: '0.1'
}
```

### Resource Slice

A resource slice is an object that contains information about one type of Resource.

### Resource Structure

A resource is a 
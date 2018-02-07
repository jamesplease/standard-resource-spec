# standard-resource

A specification for representing resources.

### Motivation

There is much attention to specifications and tools for transmitting data across
a network. Three popular approaches are:

- JSON API
- GraphQL
- gRPC

What happens when the data reaches the client? There has been less attention given
to this problem.

Libraries and frameworks built around those technologies create their own solutions,
some better than others. Or, consumers may try to use the technologies directly.

Standard Resource is a specification for representing resource data in a format
agnostic to the mode of transmission.

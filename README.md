# Standard Resource

A specification for representing resources for clients.

### Motivation

There is much attention to specifications and tools for transmitting data from a
server to a client over a network. Some popular options are:

* JSON API
* GraphQL
* gRPC

What happens when the data reaches the client? There has been less attention given
to this problem.

Accordingly, ibraries and frameworks built around those technologies create their
own solutions.

Standard Resource is a specification for representing resource data in a format
agnostic to the transmission format.

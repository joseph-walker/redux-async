# A Comparison of Redux Async Libraries

>Thoughts are coming in a more complete format soon. Here are some bullets for now.

* Thunk is by far the simplest implementation. Loop was second simplest, and Saga was extremely complex.
* Primary difference between the three is where the side-effects live. In Thunk, the action creator. Saga, in side-loaded "saga" functions. In Loop, in the reducer. It's worth noting that none of the calling code had to be changed when moving between libraries which speaks to how well-architected each of these three libraries are.
* Saga's documentation was pretty much useless. It also seemed incorrect -- the API docs said the `delay` effect creator was in the Util module, but it was actually in the root module. I ended up relying on third-party blog posts to figure out how Saga worked.
* Loop follows the Elm model, but due to limitations of Javascript it isn't really the panacea I was hoping for. It relies on clunky helper functions to get its functionality across. It still leads to more well-organized code than Thunk, though.
* Thunk may be simple, but action creators causing side-effects feels dirty.
* Saga was complex to set up and has tons of clunky boilerplate. It honestly kind of feels like a hack. I do see how it may be useful for large apps with tons of async code that needs to be sequenced.
* Loop feels like a solid middle ground, code seems more well-organized than when using Thunk but without the crazy open-endedness of Saga.
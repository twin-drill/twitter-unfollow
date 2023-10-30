# twitter-unfollow
mass unfollow extension.

Haven't packed it or anything yet so you'll have to follow the [unpacked extension method](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).

Because of the way the content-script functions you'll have to reload the `twitter.com/*/following` page once to see the button in the top right corner.
It will also persist in normal operations until a reload not on that page is performed. Clicking it outside of the intended page only has the effect of clicking any unfollow buttons outside of that page.

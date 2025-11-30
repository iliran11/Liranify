# Transports sitemap plan

## Task description
We need to create a sitemap similarly to routes page sitemap. in `src/jobs/route-scores/sitemap-generator.ts` lines 14-30

## Collections
Key collections are:
1. as with the routes sitemap, should be the `searches-per-route`
2. The core collection that store the docs this time is `route-landing-with-transportation` . this is the model file `src/modules/routes/dal/route-with-transportation-landing.model.ts`
3. It has exactly the same structure as the `route-landing-v4` (`src/modules/routes/dal/route-landing-v4.model.ts`), But with important addition: transportType.


## Implementation

1. The url of each such page is `bus/battambang/siem-reap` , so that's why the additional field `transportType` in `route-landing-with-transportation`  is improtant.
2. The flow should be very similar to The routes sitemap. The getPath function could be the same. just in `getDocs` we should check if those paths actually exists in `route-landing-with-transportation` 
3. The urls should be constructed as mentioned about: {transportType}/{fromCity}/{toCity}
4. The sitemap index path should be `/sitemaps/sitemap-index-transports.xml`
5. The sitmap itself should have this structure: `/sitemaps/lps/transports/{transport_type}/{region}/{continent}/{country}.xml`

# Testing
Important: Use `test-writer` skill
1. Currently we don't have testkits to `route-landing-with-transportation` ... Since this collection is very similar to `route-landing-v4`, We can extend `src/modules/routes/v2/tests/routes.testkit.ts` to also have, optionally only, have a transportType field.
2. That way we can seed `route-landing-with-transportation` to allow tests to simulate the database collections

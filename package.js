Package.describe({
  summary: "ScrolltoFixed.js, packed for Meteor."
});

Package.on_use(function(api) {
  api.use(['jquery'], 'client');
  api.add_files(
    [
      'scroll-to-fix.js'
    ]
    , 'client'
  );
});
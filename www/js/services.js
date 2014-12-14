angular.module('wingedwords.services', [])
  .factory('Poem', function() {
    var poems = [
      { id: 0, title: 'Gilded Lilies', body: 'There once was a muppet', 
        user: { id: 10, name: 'Scruff McGruff' }
      },
      { id: 1, title: 'Gilded Lilies', body: 'There once was a muppet', 
        user: { id: 10, name: 'Scruff McGruff' }
      },
      { id: 2, title: 'Gilded Lilies', body: 'There once was a muppet', 
        user: { id: 10, name: 'Scruff McGruff' }
      },
      { id: 3, title: 'Gilded Lilies', body: 'There once was a muppet', 
        user: { id: 10, name: 'Scruff McGruff' }
      }
    ];

    return {
      all: function() {
        return poems;
      },
      get: function(poemId) {
        return poems[poemId];
      }
    }
  })

  .factory('Update', function() {
    var updates = [
      { id: 0, content: 'liked your Poem', 
        user: { id: 10, name: 'Scruff McGruff' },
        poem: { id: 3, title: 'Gilded Lilies', body: 'There once was a muppet'}
      },
      { id: 1, content: 'commented on your Poem', 
        user: { id: 10, name: 'Scruff McGruff' },
        poem: { id: 3, title: 'Gilded Lilies', body: 'There once was a muppet'}
      },
      { id: 2, content: 'liked your Poem', 
        user: { id: 10, name: 'Scruff McGruff' },
        poem: { id: 3, title: 'Gilded Lilies', body: 'There once was a muppet'}
      },
      { id: 3, content: 'shared your Poem', 
        user: { id: 10, name: 'Scruff McGruff' },
        poem: { id: 3, title: 'Gilded Lilies', body: 'There once was a muppet'}
      }
    ];

    return {
      all: function() {
        return updates;
      }
    }
  })

  .factory('User', function() {
    var users = [
      { id: 0, name: 'Scruff McGruff' },
      { id: 1, name: 'G.I. Joe' },
      { id: 2, name: 'Miss Frizzle' },
      { id: 3, name: 'Ash Ketchum' }
    ];

    return {
      all: function() {
        return users;
      },
      get: function(userId) {
        return users[userId];
      }
    }
  });

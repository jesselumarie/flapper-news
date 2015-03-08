angular.module('flapperNews').factory('posts', [function(){
  var o = {
    posts: [  
	    {title: 'post 1', upvotes: 5, comments: []},
	  	{title: 'post 2', upvotes: 2},
	  	{title: 'post 3', upvotes: 15},
	  	{title: 'post 4', upvotes: 9},
	  	{title: 'post 5', upvotes: 4}
    ]
  };
  return o;
}])
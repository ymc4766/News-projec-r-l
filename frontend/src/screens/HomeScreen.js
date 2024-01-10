import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import TopStory from "../components/TopStory";
import Trending from "../components/Trending";
import Testimonial from "../components/Trending";
import { useDispatch, useSelector } from "react-redux";
import {
  disLikePost,
  getPosts,
  likePost,
  setPostLikes,
  updatePost,
} from "../redux/postSlice";
import { getCategories } from "../redux/categorySlice";

// Post component for individual posts

// HomeScreen component with dummy data
const HomeScreen = () => {
  const [showTrendingPosts, setShowTrendingPosts] = useState(false);
  const [isTrendingSticky, setIsTrendingSticky] = useState(false);

  const toggleTrendingPosts = () => {
    setShowTrendingPosts(!showTrendingPosts);
  };

  const dispatch = useDispatch();
  // Dummy data for posts

  // Dummy data for trending posts
  const trendingPosts = [
    {
      id: 4,
      title: "Trending Post 1",
      content: "Content of trending post 1.",
      imageUrl:
        "https://images.pexels.com/photos/7050090/pexels-photo-7050090.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 5,
      title: "Trending Post 2",
      content: "Content of trending post 2.",
      imageUrl:
        "https://images.pexels.com/photos/19479501/pexels-photo-19479501/free-photo-of-model-in-a-leather-jacket-and-jeans-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 6,
      title: "Trending Post 3",
      content: "Content of trending post 3.",
      imageUrl:
        "https://images.pexels.com/photos/18715770/pexels-photo-18715770/free-photo-of-autumn-leaves-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 6,
      title: "Trending Post 3",
      content: "Content of trending post 3.",
      imageUrl:
        "https://images.pexels.com/photos/18715770/pexels-photo-18715770/free-photo-of-autumn-leaves-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 6,
      title: "Trending Post 3",
      content: "Content of trending post 3.",
      imageUrl:
        "https://images.pexels.com/photos/18715770/pexels-photo-18715770/free-photo-of-autumn-leaves-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 6,
      title: "Trending Post 3",
      content: "Content of trending post 3.",
      imageUrl:
        "https://images.pexels.com/photos/18715770/pexels-photo-18715770/free-photo-of-autumn-leaves-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 6,
      title: "Trending Post 3",
      content: "Content of trending post 3.",
      imageUrl:
        "https://images.pexels.com/photos/18715770/pexels-photo-18715770/free-photo-of-autumn-leaves-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  const topStoryies = [
    {
      id: 0,
      title: "Breaking News",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 1,

      title: "Breaking News",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 2,

      title: "Breaking News",
      timestamp: new Date().toLocaleString(),
    },
  ];

  const testimonials = [
    {
      id: 1,
      imageUrl: "url_to_your_image",
      title: "John Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      title: "Trending Post 3",
      description: "Content of trending post 3.",
      imageUrl:
        "https://images.pexels.com/photos/18715770/pexels-photo-18715770/free-photo-of-autumn-leaves-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 6,
      title: "Trending Post 3",
      description: "Content of trending post 3.",
      imageUrl:
        "https://images.pexels.com/photos/18715770/pexels-photo-18715770/free-photo-of-autumn-leaves-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 6,
      title: "Trending Post 3",
      description: "Content of trending post 3.",
      imageUrl:
        "https://images.pexels.com/photos/18715770/pexels-photo-18715770/free-photo-of-autumn-leaves-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 6,
      title: "Trending Post 3",
      description: "Content of trending post 3.",
      imageUrl:
        "https://images.pexels.com/photos/18715770/pexels-photo-18715770/free-photo-of-autumn-leaves-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    // Add more testimonials as needed
  ];

  // const [showTrendingPosts, setShowTrendingPosts] = useState(false);

  const [topPosts, setTopPosts] = useState([]);
  const [fetchPosts, setFetchPosts] = useState([]);
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

    return `${formattedDate} at ${formattedTime}`;
  };

  const { posts, likes, disLikes } = useSelector((state) => state.posts);
  useEffect(() => {
    // Check if posts exist and shuffle
    if (posts) {
      const shuffledPosts = [...posts].sort(() => Math.random() - 0.5);

      // Get the first 4 posts
      const first4Posts = shuffledPosts.slice(0, 4);

      // Set the first 4 posts to state
      setTopPosts(first4Posts);
    }
  }, [posts]);

  useEffect(() => {
    // Check if posts exist and shuffle
    if (posts) {
      const shuffledPosts = [...posts].sort(() => Math.random() - 0.5);

      // Get the first 4 posts
      const first4Posts = shuffledPosts.slice(0, 6);

      // Set the first 4 posts to state
      setFetchPosts(first4Posts);
    }
  }, [posts]);
  const addPostLikeHandler = (postId) => {
    dispatch(likePost(postId));
  };

  const addPostDislikeHandler = (postId) => {
    dispatch(disLikePost(postId));
  };

  useEffect(() => {
    dispatch(likePost());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, likes, disLikes]);

  return (
    <div className="container mx-auto mt-8 md:px-14">
      <div className="flex justify-between">
        {/* Posts */}
        <div className="sm:w-full  md:w-2/3">
          <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
          {fetchPosts?.map((post) => (
            <Post
              key={post._id}
              title={post.title}
              description={post.description}
              imageUrl={post.image}
              author={post.user.name}
              likes={post?.likes?.length}
              disLikes={post?.disLikes?.length}
              createdAt={post.createdAt}
              views={post.numViews.length}
              addPostLikeHandler={() => addPostLikeHandler(post._id)}
              addPostDislikeHandler={() => addPostDislikeHandler(post._id)}
            />
          ))}
        </div>
        <div className="hidden md:block md:w-1/4">
          <div className="trending-posts-container sticky top-[80px]">
            <div className="">
              <div className="flex flex-col space-y-2">
                <div>
                  <h3 className="text-lg font-bold py-1">Top Stories</h3>
                  {topPosts?.map((post, index) => (
                    <TopStory
                      key={index}
                      image={post.image}
                      title={post?.title}
                      timestamp={
                        post.createdAt ? formatTimestamp(post.createdAt) : ""
                      }
                    />
                    // author={post?.user?.name}
                    // description={post?.description}
                  ))}
                </div>
              </div>

              {/* Trending posts */}
              <div>
                <h1 className="text-2xl font-bold mb-4">Trending Posts</h1>
                <div className="overflow-y-auto max-h-screen trending-posts-scroll">
                  {trendingPosts.map((post, index) => (
                    <Post key={index} {...post} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Testin... News</h3>
        <div>
          {posts?.map((post) => (
            <Testimonial
              key={post._id}
              title={post.user.name}
              description={post.title}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

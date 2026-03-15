export type BlogCategory =
  | "LATEST"
  | "NEWS & EVENTS"
  | "FITNESS"
  | "NUTRITION"
  | "WELLBEING"
  | "RECIPES"
  | "MOTIVATION";

export type BlogPost = {
  id: number;
  slug: string;
  category: BlogCategory;
  title: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  content: string[];
};

import featuredImg from "@/assets/meal-burger.jpg";
import postImg1 from "@/assets/workout-tablet.jpg";
import postImg2 from "@/assets/workout-tablet.jpg";
import postImg3 from "@/assets/trainer-lunges.jpg";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "loaded-cheesy-potato-skins",
    category: "RECIPES",
    title: "Loaded Cheesy Potato Skins",
    excerpt: "Keep these in the freezer for a quick and tasty snack.",
    image: featuredImg,
    featured: true,
    content: [
      "These loaded cheesy potato skins are perfect for meal prep and quick snacks during the week.",
      "They are simple to make, packed with flavour and easy to freeze for later.",
      "Serve them with a crisp salad or keep them as a satisfying snack after training.",
    ],
  },
  {
    id: 2,
    slug: "joes-top-10-spring-recipe-picks",
    category: "NUTRITION",
    title: "Joe's top 10 spring recipe picks",
    excerpt:
      "Balanced meals that support progress while keeping things exciting in the kitchen.",
    image: postImg1,
    content: [
      "Spring is a great time to refresh your meals and bring in lighter ingredients.",
      "This collection focuses on high-protein, colourful meals that still feel easy and realistic.",
      "The goal is to keep things enjoyable while supporting your progress.",
    ],
  },
  {
    id: 3,
    slug: "blt-pesto-orzo-bowl",
    category: "RECIPES",
    title: "BLT Pesto Orzo Bowl",
    excerpt: "Keep these in the freezer for a quick and tasty snack.",
    image: postImg2,
    content: [
      "This BLT pesto orzo bowl is a quick, flavour-packed lunch that works hot or cold.",
      "It combines fresh ingredients with a simple dressing to make something easy and satisfying.",
      "You can prep it ahead and keep portions ready in the fridge.",
    ],
  },
  {
    id: 4,
    slug: "lost-motivation-how-to-get-back-on-track",
    category: "MOTIVATION",
    title: "Lost motivation? A habit expert explains how to get back on track",
    excerpt:
      "You will never feel motivated 100% of the time. None of us do. But these tips can help.",
    image: postImg3,
    content: [
      "Motivation comes and goes, so it helps to build habits that do not depend on it.",
      "Start with a small action that feels easy enough to repeat.",
      "Consistency often matters much more than intensity when getting back on track.",
    ],
  },
  {
    id: 5,
    slug: "5-simple-workouts-to-build-consistency",
    category: "FITNESS",
    title: "5 simple workouts to build consistency",
    excerpt:
      "A realistic way to stay active when life gets busy and your energy is low.",
    image: postImg1,
    content: [
      "Consistency is often built through sessions that feel achievable, not extreme.",
      "These workouts are designed to fit into real life without a complicated setup.",
      "The key is to remove friction and make training easier to start.",
    ],
  },
  {
    id: 6,
    slug: "whats-new-in-the-body-coach-community",
    category: "NEWS & EVENTS",
    title: "What’s new in The Body Coach community",
    excerpt:
      "Fresh challenges, new recipes and more ways to stay accountable this month.",
    image: postImg2,
    content: [
      "This month brings a new set of challenges, classes and recipe ideas inside the community.",
      "It is all about helping members stay motivated and connected.",
      "There are also new tools to make planning your week easier.",
    ],
  },
  {
    id: 7,
    slug: "how-to-reset-your-routine-after-a-difficult-week",
    category: "WELLBEING",
    title: "How to reset your routine after a difficult week",
    excerpt:
      "Small habits can help you rebuild momentum without trying to do everything at once.",
    image: postImg3,
    content: [
      "When a week feels messy, the answer usually is not to restart perfectly.",
      "A better approach is to return to one or two basics you can trust.",
      "That could be a walk, a quick workout or a simple meal plan for the next day.",
    ],
  },
];
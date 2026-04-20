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
import postImg2 from "@/assets/workout.jpg";
import postImg3 from "@/assets/trainer-lunges.jpg";
import postImg4 from "@/assets/workout1.jpg";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "loaded-cheesy-potato-skins",
    category: "RECIPES",
    title: "Loaded Cheesy Potato Skins",
    excerpt: "A crispy, satisfying snack you can prep ahead and keep ready for busy days.",
    image: featuredImg,
    featured: true,
    content: [
      "These loaded cheesy potato skins are ideal when you want something comforting without overcomplicating things. They work really well as a high-satiety snack, a side dish or even a quick lunch with a fresh salad.",
      "The key is to bake the skins until crisp, then fill them with a simple mix of cheese, spring onion, yoghurt or sour cream, and any extra toppings you enjoy. You can prep a tray in advance and reheat them when you need something fast.",
      "Recipes like this are useful because they make healthy eating feel realistic. Progress is much easier to maintain when your meals and snacks are both enjoyable and convenient.",
    ],
  },
  {
    id: 2,
    slug: "how-to-build-a-week-of-balanced-high-protein-meals",
    category: "NUTRITION",
    title: "How to build a week of balanced high-protein meals",
    excerpt:
      "A simple approach to planning breakfast, lunch and dinner without getting bored or overwhelmed.",
    image: postImg1,
    content: [
      "A balanced high-protein week does not need a complicated meal plan. Start by building each meal around one clear protein source, then add colour from vegetables, slow-release carbs for energy and a source of healthy fat for satisfaction.",
      "For breakfast, that might mean eggs on toast with fruit, Greek yoghurt with oats and berries, or a protein smoothie if mornings are rushed. For lunch and dinner, think chicken, salmon, tofu, lentils or lean mince with rice, potatoes, pasta or wraps and plenty of vegetables.",
      "The real win comes from repeatable structure, not perfection. If you have three or four breakfasts, four lunches and four dinners you genuinely enjoy, you can mix and match them across the week and stay consistent without feeling restricted.",
    ],
  },
  {
    id: 3,
    slug: "5-quick-post-workout-meals-youll-actually-want-to-eat",
    category: "RECIPES",
    title: "5 quick post-workout meals you'll actually want to eat",
    excerpt: "Fast, satisfying meal ideas that help recovery and fit into real life.",
    image: postImg2,
    content: [
      "After training, the best meal is often the one you can make quickly and eat consistently. Good post-workout meals do not need to be fancy. They just need to include protein, enough energy to refuel and ingredients you genuinely enjoy.",
      "Some simple options include a chicken wrap with salad and yoghurt sauce, eggs on sourdough with avocado, a rice bowl with salmon and roasted vegetables, pasta with lean mince and tomato sauce, or Greek yoghurt with fruit, cereal and nut butter if you want something lighter.",
      "A lot of people struggle after workouts because they leave meals too late or rely on snacks that are not filling enough. Keeping two or three easy recovery meals on rotation makes it much easier to support performance, recovery and body composition goals.",
    ],
  },
  {
    id: 4,
    slug: "lost-motivation-what-to-do-when-you-cant-seem-to-start",
    category: "MOTIVATION",
    title: "Lost motivation? What to do when you can't seem to start",
    excerpt:
      "When motivation drops, stop relying on willpower and use a more practical reset.",
    image: postImg3,
    content: [
      "The biggest mistake people make when motivation disappears is waiting for it to come back before they act. In reality, motivation often returns after action, not before it. That means the goal is not to feel more inspired first. It is to make the first step easier.",
      "A useful reset is to shrink the habit until it feels almost too easy to avoid. Instead of promising yourself a full workout, do ten minutes. Instead of overhauling your diet, plan one solid meal for tomorrow. Instead of trying to fix the whole week, focus on today.",
      "Momentum builds from proof. Every small promise you keep to yourself rebuilds confidence. The aim is not to have a perfect restart. It is to create enough consistency that progress begins to feel possible again.",
    ],
  },
  {
    id: 5,
    slug: "5-simple-workouts-to-build-consistency",
    category: "FITNESS",
    title: "5 simple workouts to build consistency",
    excerpt:
      "Short, effective sessions that help you stay active even when time and energy are low.",
    image: postImg4,
    content: [
      "Consistency usually comes from workouts that feel realistic, not extreme. If every session feels like a huge event, it becomes much harder to stay regular. A better approach is to have a small menu of go-to sessions you can choose from depending on your time, energy and mood.",
      "A strong weekly setup could include a 20-minute full-body dumbbell workout, a brisk walk with intervals, a short bodyweight circuit at home, a lower-body strength session and a mobility or recovery flow. None of these need to be long to be effective.",
      "What matters most is reducing friction. Lay your kit out, keep your training plan simple and remove unnecessary choices. When workouts are easy to start, they become easier to repeat, and that is where real progress begins.",
    ],
  },
  {
    id: 6,
    slug: "whats-new-in-the-body-coach-community",
    category: "NEWS & EVENTS",
    title: "What’s new in The Body Coach community",
    excerpt:
      "New challenges, fresh recipe ideas and better ways to stay connected this month.",
    image: postImg1,
    content: [
      "This month inside the community, the focus is on making progress feel more social, more practical and more sustainable. There are fresh challenges to help members train with purpose, along with new recipe ideas that fit around busy routines.",
      "We are also making it easier to stay accountable through check-ins, shared progress and content designed to help members keep going when motivation dips. That sense of support often makes a huge difference, especially when people are trying to create lasting habits.",
      "The goal is not just to give people more content. It is to help them feel guided, encouraged and connected so they can keep moving forward with more confidence.",
    ],
  },
  {
    id: 7,
    slug: "how-to-reset-your-routine-after-a-difficult-week",
    category: "WELLBEING",
    title: "How to reset your routine after a difficult week",
    excerpt:
      "A calmer way to get back on track without trying to fix everything at once.",
    image: postImg3,
    content: [
      "After a difficult week, most people try to recover by doing too much too quickly. They write an intense plan, promise themselves a complete reset and then feel even more behind when life stays messy. A better approach is to re-establish a few basics first.",
      "Start with sleep, hydration, one form of movement and one dependable meal. That might be going to bed a little earlier, taking a 20-minute walk, doing one short workout and planning tomorrow’s lunch before the day gets busy.",
      "Wellbeing improves when your routine starts to feel supportive again, not punishing. The aim is to create a sense of steadiness. Once that returns, motivation, training and nutrition usually become much easier to rebuild.",
    ],
  },
];
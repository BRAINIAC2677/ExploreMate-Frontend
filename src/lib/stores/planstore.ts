import { writable } from "svelte/store";
import type { Plan } from "../interfaces/plan";

const plan_store = writable<Plan>({
  start_date: "",
  duration: 3,
  cities: [],
  destinations: [],
  events: [],
  activities: [],
  hotels: [],
  all_hotels: [],
  restaurants: [],
  all_restaurants: [],
  food_budget: 2,
  room_budget: 2,
  star_choice: 3,
  choice_progress: 0,
  buddy_count: 1,
  destination_estimated_budget: 0,
  hotel_estimated_budget: 0,
  restaurant_estimated_budget: 0,
  activity_estimated_budget: 0,
  event_estimated_budget: 0,
  plan_created: false,
  plan_final_cost: 0,
});

export default plan_store;

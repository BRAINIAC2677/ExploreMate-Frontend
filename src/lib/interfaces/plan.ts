import type { Destination } from "./destination";
import type { Event } from "./event";
import type { Activity } from "./activity";

export interface Plan {
    start_date: string;
    duration: number;
    cities: string[];
    destinations: Destination[];
    events: Event[];
    activities: Activity[];
    choice_level: number;
    traveler_count: number;
}

export const hashmap: Record<number, [string, string]> = {
    0: ["City", "/newplan"],
    1: ["Destinations", "/newplan/destinations"],
    2: ["Food", "/newplan/food"],
    3: ["Accomodation", "/newplan/accomodation"],
    4: ["Events", "/newplan/events"],
    5: ["Activities", "/newplan/activities"],
};
